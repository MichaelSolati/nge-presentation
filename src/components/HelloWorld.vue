<template>
  <nge-slides-wrapper>
    <nge-slide type="title" title="Angular Element Slides" subtitle="Web Components Made Easy"></nge-slide>
    <nge-slide type="section" title="Section Slide"></nge-slide>
    <nge-slide title="Slide 3" content="Content can be defined via an attribute"></nge-slide>
    <nge-slide title="Slide 4">
      <p>Or you can put your content in as HTML</p>
    </nge-slide>
    <nge-slide type="blank">
      <p>A blank slide has little to no properties</p>
      <p>All it's designed to be is an HTML passthrough</p>
    </nge-slide>
    <nge-slide type="title" title="Slide 6"></nge-slide>
    <nge-slides-progress-bar></nge-slides-progress-bar>
  </nge-slides-wrapper>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {}
</script>