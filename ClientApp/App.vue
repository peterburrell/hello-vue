<template>
    <div id="app-root">
            <site-menu />
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import SiteMenu from './components/SiteMenu.vue';

    export default {
        components: { SiteMenu }
    }
</script>

<style>
    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        padding-top: 50px;
    }
</style>
