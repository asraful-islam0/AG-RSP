#!/usr/bin/env python3
import os
import sys
import shutil
import subprocess

def run_cmd(cmd, cwd=None):
    print(f"RUNNING: {' '.join(cmd)}")
    res = subprocess.run(cmd, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if res.returncode != 0:
        print("ERROR:")
        print(res.stderr)
        print(res.stdout)
        raise RuntimeError(f"Command failed with code {res.returncode}")
    if res.stdout.strip():
        print(res.stdout.strip())
    return res

def main():
    root_dir = "/app/applet"
    build_dir = "/tmp/apk_build"
    tools_dir = "/tmp/tools"
    android_jar = "/tmp/android.jar"
    ecj_jar = os.path.join(tools_dir, "ecj.jar")
    r8_jar = os.path.join(tools_dir, "r8.jar")

    if not os.path.exists(android_jar):
        raise FileNotFoundError("android.jar not found at " + android_jar)
    if not os.path.exists(ecj_jar) or not os.path.exists(r8_jar):
        raise FileNotFoundError("Compilers not found in " + tools_dir)

    if os.path.exists(build_dir):
        shutil.rmtree(build_dir)
    os.makedirs(build_dir, exist_ok=True)

    # 1. Structure
    pkg_name = "com.agdigital.official"
    pkg_path = pkg_name.replace(".", "/")
    src_dir = os.path.join(build_dir, "src", pkg_path)
    res_dir = os.path.join(build_dir, "res")
    values_dir = os.path.join(res_dir, "values")
    obj_dir = os.path.join(build_dir, "obj")
    dex_dir = os.path.join(build_dir, "dex")
    os.makedirs(src_dir, exist_ok=True)
    os.makedirs(values_dir, exist_ok=True)
    os.makedirs(obj_dir, exist_ok=True)
    os.makedirs(dex_dir, exist_ok=True)

    # 2. Icons
    logo_src = os.path.join(root_dir, "public/logo.jpg")
    densities = {
        "mdpi": "48x48",
        "hdpi": "72x72",
        "xhdpi": "96x96",
        "xxhdpi": "144x144",
        "xxxhdpi": "192x192"
    }
    for density, size in densities.items():
        mipmap_dir = os.path.join(res_dir, f"mipmap-{density}")
        os.makedirs(mipmap_dir, exist_ok=True)
        out_png = os.path.join(mipmap_dir, "ic_launcher.png")
        run_cmd(["convert", logo_src, "-resize", f"{size}^", "-gravity", "center", "-extent", size, out_png])

    # 3. strings.xml
    strings_xml = """<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">AG DIGITAL</string>
</resources>
"""
    with open(os.path.join(values_dir, "strings.xml"), "w") as f:
        f.write(strings_xml)

    # 4. AndroidManifest.xml
    manifest_xml = f"""<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="{pkg_name}"
    android:versionCode="2"
    android:versionName="1.1">

    <uses-sdk android:minSdkVersion="23" android:targetSdkVersion="34" />

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher"
        android:roundIcon="@mipmap/ic_launcher"
        android:theme="@android:style/Theme.NoTitleBar"
        android:hardwareAccelerated="true"
        android:allowBackup="true"
        android:supportsRtl="true">
        <activity
            android:name="{pkg_name}.MainActivity"
            android:label="@string/app_name"
            android:configChanges="orientation|screenSize|keyboardHidden|screenLayout"
            android:windowSoftInputMode="adjustResize"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
"""
    manifest_file = os.path.join(build_dir, "AndroidManifest.xml")
    with open(manifest_file, "w") as f:
        f.write(manifest_xml)

    # 5. Java Code
    java_code = f"""package {pkg_name};

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.Toast;

public class MainActivity extends Activity {{
    private WebView webView;
    private ProgressBar progressBar;
    private static final String APP_URL = "https://asraful-gadgets.netlify.app";

    @Override
    protected void onCreate(Bundle savedInstanceState) {{
        super.onCreate(savedInstanceState);

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.parseColor("#06090e"));

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#06090e"));

        progressBar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        progressBar.setMax(100);
        progressBar.setProgress(0);
        FrameLayout.LayoutParams pbParams = new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT, 8
        );
        progressBar.setLayoutParams(pbParams);

        root.addView(webView, new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT
        ));
        root.addView(progressBar);

        setContentView(root);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setAllowFileAccess(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);

        webView.setWebChromeClient(new WebChromeClient() {{
            @Override
            public void onProgressChanged(WebView view, int newProgress) {{
                if (newProgress < 100) {{
                    progressBar.setVisibility(View.VISIBLE);
                    progressBar.setProgress(newProgress);
                }} else {{
                    progressBar.setVisibility(View.GONE);
                }}
            }}
        }});

        webView.setWebViewClient(new WebViewClient() {{
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {{
                if (url == null) return false;

                if (url.startsWith("tel:") || url.startsWith("mailto:") || 
                    url.startsWith("whatsapp:") || url.contains("api.whatsapp.com") || url.contains("wa.me") ||
                    url.contains("facebook.com") || url.contains("instagram.com") || url.contains("twitter.com") || url.contains("x.com")) {{
                    try {{
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                        startActivity(intent);
                        return true;
                    }} catch (Exception e) {{
                        Toast.makeText(MainActivity.this, "Cannot open link", Toast.LENGTH_SHORT).show();
                        return true;
                    }}
                }}

                if (url.contains("asraful-gadgets.netlify.app") || url.contains("netlify.app")) {{
                    view.loadUrl(url);
                    return true;
                }}

                try {{
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    startActivity(intent);
                    return true;
                }} catch (Exception e) {{
                    return false;
                }}
            }}
        }});

        webView.loadUrl(APP_URL);
    }}

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {{
        if (keyCode == KeyEvent.KEYCODE_BACK && webView.canGoBack()) {{
            webView.goBack();
            return true;
        }}
        return super.onKeyDown(keyCode, event);
    }}
}}
"""
    java_file = os.path.join(src_dir, "MainActivity.java")
    with open(java_file, "w") as f:
        f.write(java_code)

    print("Step 1: AAPT generating R.java...")
    gen_dir = os.path.join(build_dir, "gen")
    os.makedirs(gen_dir, exist_ok=True)
    run_cmd([
        "aapt", "package", "-m",
        "-J", gen_dir,
        "-M", manifest_file,
        "-S", res_dir,
        "-I", android_jar
    ])

    print("Step 2: ECJ compiling Java sources...")
    r_java = os.path.join(gen_dir, pkg_path, "R.java")
    run_cmd([
        "java", "-jar", ecj_jar,
        "-7",
        "-cp", f"{android_jar}:{gen_dir}",
        "-d", obj_dir,
        java_file, r_java
    ])

    print("Step 3: R8/D8 compiling .class to classes.dex...")
    class_files = []
    for r, d, f_list in os.walk(obj_dir):
        for f in f_list:
            if f.endswith(".class"):
                class_files.append(os.path.join(r, f))

    run_cmd([
        "java", "-cp", r8_jar,
        "com.android.tools.r8.D8",
        "--lib", android_jar,
        "--min-api", "21",
        "--output", dex_dir
    ] + class_files)

    print("Step 4: AAPT packaging unaligned APK (with uncompressed resources.arsc)...")
    unaligned_apk = os.path.join(build_dir, "unaligned.apk")
    run_cmd([
        "aapt", "package", "-f",
        "-0", "arsc",
        "-M", manifest_file,
        "-S", res_dir,
        "-I", android_jar,
        "-F", unaligned_apk
    ])

    print("Step 5: Adding classes.dex to APK...")
    run_cmd(["aapt", "add", "-f", unaligned_apk, "classes.dex"], cwd=dex_dir)

    print("Step 6: Running zipalign (4-byte alignment)...")
    aligned_apk = os.path.join(build_dir, "aligned.apk")
    run_cmd(["zipalign", "-f", "-p", "4", unaligned_apk, aligned_apk])
    run_cmd(["zipalign", "-c", "4", aligned_apk])

    print("Step 7: Generating Release Keystore...")
    keystore = "/tmp/release.keystore"
    if os.path.exists(keystore):
        os.remove(keystore)
    run_cmd([
        "keytool", "-genkeypair", "-v",
        "-keystore", keystore,
        "-alias", "agdigitalkey",
        "-keyalg", "RSA",
        "-sigalg", "SHA256withRSA",
        "-keysize", "2048",
        "-validity", "25000",
        "-storepass", "agdigital123",
        "-keypass", "agdigital123",
        "-dname", "CN=Asraful Islam Mazarbhuiya, OU=AG DIGITAL, O=AG DIGITAL, L=Silchar, ST=Assam, C=IN"
    ])

    print("Step 8: Signing aligned APK with apksigner (v1, v2, v3)...")
    final_apk = os.path.join(root_dir, "AG_DIGITAL.apk")
    if os.path.exists(final_apk):
        os.remove(final_apk)

    run_cmd([
        "apksigner", "sign",
        "--ks", keystore,
        "--ks-pass", "pass:agdigital123",
        "--ks-key-alias", "agdigitalkey",
        "--key-pass", "pass:agdigital123",
        "--v1-signing-enabled", "true",
        "--v2-signing-enabled", "true",
        "--v3-signing-enabled", "true",
        "--out", final_apk,
        aligned_apk
    ])

    # Also keep AG_DIGITAL_Official.apk in sync
    shutil.copyfile(final_apk, os.path.join(root_dir, "AG_DIGITAL_Official.apk"))
    shutil.copyfile(final_apk, os.path.join(root_dir, "public/AG_DIGITAL.apk"))

    print("Step 9: Verifying signature and alignment...")
    run_cmd(["apksigner", "verify", "-v", final_apk])
    run_cmd(["zipalign", "-c", "4", final_apk])

    size = os.path.getsize(final_apk)
    print(f"SUCCESS! Signed and Zipaligned APK created at: {final_apk}")
    print(f"Size: {size} bytes ({size / (1024*1024):.2f} MB)")

if __name__ == "__main__":
    main()
