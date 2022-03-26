package com.barbershop;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.soloader.SoLoader;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "barbershop";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
  SoLoader.init(this, /* native exopackage */ false);
  OkHttpClientProvider.setOkHttpClientFactory(new CustomClientFactory()); //add this line.
}
}
