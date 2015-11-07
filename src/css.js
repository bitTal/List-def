function addAndOverridePanelCSS() {
  wp_dequeue_style( 'redux-admin-css' );
  wp_register_style(
    'redux-custom-css',
    'http://urltomyfile',
    array( 'farbtastic' ), // Notice redux-admin-css is removed and the wordpress standard farbtastic is included instead
    time(),
    'all'
  );    
  wp_enqueue_style('redux-custom-css');
}
// This example assumes your opt_name is set to redux_demo, replace with your opt_name value
add_action( 'redux/page/redux_demo/enqueue', 'addAndOverridePanelCSS' );