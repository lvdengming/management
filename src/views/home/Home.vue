<template>
    <SearchBar/>
    <ActionBar/>
</template>

<script setup lang="ts">
import SearchBar from './search-bar/SearchBar.vue';
import ActionBar from './action-bar/ActionBar.vue';
</script>

<style scoped lang="scss">
    :host {
        background-color: #fefefe;
    }
</style>
