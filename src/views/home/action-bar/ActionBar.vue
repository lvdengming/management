<template>
    <nav class="action-bar">
        <MenuIcon/>
        <AddIcon/>
        <div class="profile"></div>
    </nav>
</template>

<script setup lang="ts">
import MenuIcon from 'icons/Menu.vue';
import AddIcon from 'icons/Add.vue';
</script>

<style scoped lang="scss">
@import url('./ActionBar.scss');
</style>
