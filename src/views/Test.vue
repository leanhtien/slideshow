<template>
    <div class="background">
        <header class="ScriptHeader">
            <div class="rt-container">
                <div class="col-rt-12">
                    <div class="rt-heading">
                        <h1 style="color: black !important;">THÔNG ĐIỆP ĐẠI HỘI</h1>
                        <!-- <p>A 3D image slideshow using HTML and CSS.</p> -->
                    </div>
                </div>
            </div>
        </header>

        <section>
            <div class="rt-container">
                <div class="col-rt-12">
                    <div class="Scriptcontent">

                        <!-- 3D Image Slideshow HTML -->
                        <section class="slideshow">
                            <div class="content">
                                <div class="slider-content">
                                    <figure v-for="item in images" class="shadow">
                                        <img :src="item">
                                    </figure>
                                    <figure class="shadow"><img
                                            src="https://blog-bbh.s3.ap-southeast-1.amazonaws.com/logodaihoi%20%281%29-1695612080.png">
                                    </figure>
                                </div>
                            </div>
                        </section>
                        <!-- End 3D Image Slideshow HTML -->

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { request } from '@/service/helper/request';

const images = ref<string[]>([
    'https://tool.botup.io/media/doan_thanh_nien/UuBjPXCZBP1695734975475_5559466840816033.png',
    'https://tool.botup.io/media/doan_thanh_nien/v1Rc35Kjol1695729513003_7012355765443124.png',
    'https://tool.botup.io/media/doan_thanh_nien/ngLChfYlEL1695708975057_4231217410318550.png',
    'https://tool.botup.io/media/doan_thanh_nien/ocua8GOGf91695633947169_10079144858825943.png',
    'https://tool.botup.io/media/doan_thanh_nien/3FF4bazwFF1695446184707_6976363399064896.png',
    'https://tool.botup.io/media/hoi_truong_dai_hoi/ikBft7vIGK1695617087181_1704268169668229.png',
    'https://tool.botup.io/media/doan_thanh_nien/4SV3UUtGTG1695364566431_6690991790961788.png',
    'https://tool.botup.io/media/doan_thanh_nien/2j4RK6W2f41695393179752_3948950285218633.png',
    'https://tool.botup.io/media/doan_thanh_nien/Ydj1pomdQr1695393616994_3938693399532762.png',
    'https://tool.botup.io/media/doan_thanh_nien/Wif4qZwjWs1695604927507_6963953287000017.png'
])

const getImages = () => {
    fetch(`https://tool.botup.io/v1/hoi_truong_dai_hoi`, {})
        .then(r => r.json())
        .then(r => {
            let files = r.files
            files = files.map((item: string) => {
                item = `https://tool.botup.io/media/hoi_truong_dai_hoi/${item}`
                return item
            })
            console.log("files", files)
            images.value = files

        })
        .catch(e => {

        })
}

onMounted(() => {
    // setInterval(function () {
    //     getImages()
    // }, 60000)
})
</script>
<style scoped lang="scss">
.background {
    background-image: url(https://blog-bbh.s3.ap-southeast-1.amazonaws.com/background-1695612093.png);
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.slideshow {
    margin: 0 auto;
    padding-top: 160px;
    height: 700px;
    perspective: 600px;
}

.content {
    margin: auto;
    width: 150px;
    perspective: 990px;
    position: relative;
    padding-top: 80px;
    transform-style: preserve-3d;
}

.slider-content {
    width: 100%;
    position: absolute;
    float: right;
    animation: rotate 60s infinite linear;
    transform-style: preserve-3d;
}

.slider-content:hover {
    cursor: pointer;
    animation-play-state: paused;
}

.slider-content figure {
    width: 180px;
    height: 120px;
    //   border:1px solid #555;
    overflow: hidden;
    position: absolute;
}

.slider-content figure:nth-child(1) {
    transform: rotateY(0deg) translateZ(300px);
}

.slider-content figure:nth-child(2) {
    transform: rotateY(40deg) translateZ(300px);
}

.slider-content figure:nth-child(3) {
    transform: rotateY(80deg) translateZ(300px);
}

.slider-content figure:nth-child(4) {
    transform: rotateY(120deg) translateZ(300px);
}

.slider-content figure:nth-child(5) {
    transform: rotateY(160deg) translateZ(300px);
}

.slider-content figure:nth-child(6) {
    transform: rotateY(200deg) translateZ(300px);
}

.slider-content figure:nth-child(7) {
    transform: rotateY(240deg) translateZ(300px);
}

.slider-content figure:nth-child(8) {
    transform: rotateY(280deg) translateZ(300px);
}

.slider-content figure:nth-child(9) {
    transform: rotateY(320deg) translateZ(300px);
}

.slider-content figure:nth-child(10) {
    transform: rotateY(360deg) translateZ(300px);
}

.shadow {
    position: absolute;
    box-shadow: 0px 0px 0px #000;

}

.slider-content img {
    image-rendering: auto;
    transition: all 300ms;
    width: 100%;
    height: 100%;
}

.slider-content img:hover {
    transform: scale(1);
    transition: all 300ms;

}

@keyframes rotate {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(360deg);
    }
}



/* ******************************************************
	Author URI: https://codeconvey.com/
	Demo Purpose Only - May not require to add.
	font-family: "Raleway",sans-serif;
*********************************************************/

@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900');



html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

article,
header,
section,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
    display: block;
}

body {
    background: #dedede none repeat scroll 0 0;
    color: #222;
    font-size: 100%;
    line-height: 24px;
    margin: 0;
    padding: 0;
    font-family: "Raleway", sans-serif;
}

a {
    font-family: "Raleway", sans-serif;
    text-decoration: none;
    outline: none;
}

a:hover,
a:focus {
    color: #373e18;
}

section {
    float: left;
    width: 100%;
    padding-bottom: 3em;
}

h2 {
    color: #1a0e0e;
    font-size: 26px;
    font-weight: 700;
    margin: 0;
    line-height: normal;
    text-transform: uppercase;
}

h2 span {
    display: block;
    padding: 0;
    font-size: 18px;
    opacity: 0.7;
    margin-top: 5px;
    text-transform: uppercase;
}

#float-right {
    float: right;
}

/* ******************************************************
	Script Top
*********************************************************/

.ScriptTop {
    background: #fff none repeat scroll 0 0;
    float: left;
    font-size: 0.69em;
    font-weight: 600;
    line-height: 2.2;
    padding: 12px 0;
    text-transform: uppercase;
    width: 100%;
}

/* To Navigation Style 1*/
.ScriptTop ul {
    margin: 24px 0;
    padding: 0;
    text-align: left;
}

.ScriptTop li {
    list-style: none;
    display: inline-block;
}

.ScriptTop li a {
    background: #6a4aed none repeat scroll 0 0;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 18px;
    text-decoration: none;
    text-transform: capitalize;
}

.ScriptTop li a:hover {
    background: #000;
    color: #fff;
}


/* ******************************************************
	Script Header
*********************************************************/

.ScriptHeader {
    float: left;
    width: 100%;
    padding: 2em 0;
}

.rt-heading {
    margin: 0 auto;
    text-align: center;
}

.Scriptcontent {
    line-height: 28px;
}

.ScriptHeader h1 {
    font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: #6a4aed;
    font-size: 26px;
    font-weight: 700;
    margin: 0;
    line-height: normal;

}

.ScriptHeader h2 {
    color: #312c8f;
    font-size: 20px;
    font-weight: 400;
    margin: 5px 0 0;
    line-height: normal;

}

.ScriptHeader h1 span {
    display: block;
    padding: 0;
    font-size: 22px;
    opacity: 0.7;
    margin-top: 5px;

}

.ScriptHeader span {
    display: block;
    padding: 0;
    font-size: 22px;
    opacity: 0.7;
    margin-top: 5px;
}




/* ******************************************************
	Live Demo
*********************************************************/





/* ******************************************************
	Responsive Grids
*********************************************************/

.rt-container {
    margin: 0 auto;
    padding-left: 12px;
    padding-right: 12px;
}

.rt-row:before,
.rt-row:after {
    display: table;
    line-height: 0;
    content: "";
}

.rt-row:after {
    clear: both;
}

[class^="col-rt-"] {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    padding: 0 15px;
    min-height: 1px;
    position: relative;
}


@media (min-width: 768px) {
    .rt-container {
        width: 750px;
    }

    [class^="col-rt-"] {
        float: left;
        width: 49.9999999999%;
    }

    .col-rt-6,
    .col-rt-12 {
        width: 100%;
    }

}

@media (min-width: 1200px) {
    .rt-container {
        width: 1170px;
    }

    .col-rt-1 {
        width: 16.6%;
    }

    .col-rt-2 {
        width: 30.33%;
    }

    .col-rt-3 {
        width: 50%;
    }

    .col-rt-4 {
        width: 67.664%;
    }

    .col-rt-5 {
        width: 83.33%;
    }


}

@media only screen and (min-width:240px) and (max-width: 768px) {

    .ScriptTop h1,
    .ScriptTop ul {
        text-align: center;
    }

    .ScriptTop h1 {
        margin-top: 0;
        margin-bottom: 15px;
    }

    .ScriptTop ul {
        margin-top: 12px;
    }

    .ScriptHeader h1,
    .ScriptHeader h2,
    .scriptnav ul {
        text-align: center;
    }

    .scriptnav ul {
        margin-top: 12px;
    }

    #float-right {
        float: none;
    }

}
</style>