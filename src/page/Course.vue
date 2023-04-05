<template>
    <body>
        <div>
            <ul>
                <li><router-link to="HTML">HTML</router-link></li>
                <li><router-link to="JAVASCRIPT">JAVASCRIPT</router-link></li>
                <li><router-link to="CSS">CSS</router-link></li>
                <li><router-link to="LARAVEL">LARAVEL</router-link></li>
                <li><router-link to="ANGULAR">ANGULAR</router-link></li>

            </ul>
        </div>
    </body>
</template>

<script>
export default {

}
</script>

<style>
li{
    border-color: black;
    background-color: rgb(228, 216, 200);
    
}
li:active,
li:hover{
    background-color: rgb(199, 189, 176);
}
body{
    background-color: rgb(249, 251, 250);
    display: block;
}
</style>