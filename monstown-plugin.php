<?php
/*
Plugin Name: MONSTOWNプラグイン
Description: MONSTOWN専用ブロックエディタプラグイン
Author: 4410
Version: 1.0.0
Author URI: https://kent-and-co.com/
*/
add_action( 'enqueue_block_editor_assets', 'monstown_enqueue_block_editor_assets' );

function monstown_enqueue_block_editor_assets() {
	// JSの読み込み
	wp_enqueue_script(
		'monstown',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);
	// CSSの読み込み
	wp_enqueue_style(
		'monstown-style',
		plugins_url( 'css/style.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'css/style.css' )
	);
}
