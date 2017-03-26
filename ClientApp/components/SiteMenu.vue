<template>
    <div id="app-header" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Hello Vue!</a>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/" :exact="true">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/counter">Counter</router-link>
                    </li>
                    <li>
                        <router-link to="/fetchdata">Fetch data</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    #app-header.navbar-default .navbar-brand {
        font-size: 24px;
        font-weight: bold;
        color: rgba(119, 119, 119, 1);
    }
    
    #app-header.navbar-default {
        font-size: 18px;
        background-color: rgba(248, 248, 248, .9);
        border-width: 1px;
        border-radius: 0;
        /*box-shadow: 0 2px 8px -1px rgba(0,0,0,0.25)*/
    }
    
    #app-header.navbar-default .navbar-nav>li>a {
        color: rgba(119, 119, 119, 1);
        background-color: rgba(248, 248, 248, 0);
    }
    
    #app-header.navbar-default .navbar-nav>li>a:hover,
    #app-header.navbar-default .navbar-nav>li>a:focus {
        color: rgba(51, 51, 51, 1);
        background-color: rgba(248, 248, 248, 0);
    }
    
    #app-header.navbar-default .navbar-nav>.active>a,
    #app-header.navbar-default .navbar-nav>.active>a:hover,
    #app-header.navbar-default .navbar-nav>.active>a:focus {
        color: rgba(85, 85, 85, 1);
        background-color: rgba(231, 231, 231, 1);
    }
    
    #app-header.navbar-default .navbar-toggle {
        border-color: #ddd;
    }
    
    #app-header.navbar-default .navbar-toggle:hover,
    #app-header.navbar-default .navbar-toggle:focus {
        background-color: #ddd;
    }
    
    #app-header.navbar-default .navbar-toggle .icon-bar {
        background-color: #888;
    }
    
    #app-header.navbar-default .navbar-toggle:hover .icon-bar,
    #app-header.navbar-default .navbar-toggle:focus .icon-bar {
        background-color: #888;
    }
</style>