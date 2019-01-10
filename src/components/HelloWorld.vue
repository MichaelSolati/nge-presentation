<template>
  <nge-slides-wrapper>
    <nge-slide-title title="Angular Element Slides" subtitle="Web Components Made Easy"></nge-slide-title>
    <nge-slide-section title="Section Slide"></nge-slide-section>
    <nge-slide title="Slide 3" content="Content can be defined via an attribute"></nge-slide>
    <nge-slide title="Slide 4">
      <p>Or you can put your content in as HTML</p>
    </nge-slide>
    <nge-slide-blank>
      <p>A blank slide has little to no properties</p>
      <p>All it's designed to be is an HTML passthrough</p>
    </nge-slide-blank>
    <nge-slide-title title="Slide 6"></nge-slide-title>
    <nge-slides-progress-bar></nge-slides-progress-bar>
  </nge-slides-wrapper>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {}
</script>