<?php
    $base=(isset($_SERVER['HTTPS']) ? "https://" : "http://").$_SERVER['HTTP_HOST'];
    $base.= str_replace(basename($_SERVER['SCRIPT_NAME']), '', $_SERVER['SCRIPT_NAME']);

    // Check condition when url have path pages
    $getBase = explode('/', $base);
    if (sizeof($getBase) == 6) {
        $base = substr($base, 0, -6);
    }
    
    define("BASE_URL", $base);
?>