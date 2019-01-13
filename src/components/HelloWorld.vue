<template>
  <nge-slides-wrapper :handle="handle" :hashtag="hashtag">
    <nge-slide
      v-for="(slide, index) in slides"
      :key="index"
      :type="slide.type"
      :title="slide.title"
      :subtitle="slide.subtitle"
      :content="slide.content"
      :background-image="slide.background"
    >
      <div v-if="slide.html" v-html="slide.html"></div>
    </nge-slide>
    <nge-slides-progress-bar></nge-slides-progress-bar>
  </nge-slides-wrapper>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public handle = '@MichaelSolati';
  public hashtag = '#AngularElements';
  public slides = [
    {
      type: 'title',
      title: 'Yo Dawg, I Heard You Like (Angular) Components',
      subtitle: 'Web Components With Angular',
      content: null,
      html: null,
      background: null
    },
    {
      type: null,
      title: 'About Me',
      subtitle: null,
      content: null,
      html: `
      <div class='flex-center'>
        <img src='${require(`@/assets/michael.png`)}' alt='Picture of Michael' height='400px' class='margin round-img'>
        <div class='margin take-space'>
          <ul>
            <li>Frontend Developer
              <ul>
                <li>3 years total</li>
                <li>2 years of Angular</li>
              </ul>
            </li>
            <li>Drinker of coffee</li>
            <li>Lover of memes</li>
            <li>Developer 🥑 @ Typeform</li>
          </ul>
        </div>
      </div>
      `,
      background: null
    },
    {
      type: 'section',
      title: 'Who here has had to write front end code?',
      subtitle: null,
      content: null,
      html: null,
      background: null
    },
    {
      type: null,
      title: 'Maybe something like these?',
      subtitle: null,
      content: null,
      html: `
      <div class='flex-center white'>
        <div class='flex-center margin take-space'>
          <vaadin-button onclick="alert('You clicked me')">Click Me!</vaadin-button>
        </div>
        <div class='flex-center margin take-space'>
          <vaadin-date-picker label="IT'S TODAY!!!" value="${(new Date()).toISOString().split('T')[0]}">
            </vaadin-date-picker>
        </div>
      </div>
      `,
      background: null
    },
    {
      type: 'blank',
      title: null,
      subtitle: null,
      content: null,
      html: null,
      background: require(`@/assets/npm.png`)
    },
    {
      type: 'blank',
      title: null,
      subtitle: null,
      content: null,
      html: null,
      background: require(`@/assets/npm-count.png`)
    },
    {
      type: null,
      title: 'Buttons for every framework...',
      subtitle: null,
      content: null,
      html: `
      <div class='flex-center'>
        <div class='flex-center margin take-space'>
          <img src="${require('@/assets/angular.png')}" alt="Angular Logo" height="200px">
        </div>
        <div class='flex-center margin take-space'>
          <img src="${require('@/assets/react.png')}" alt="React Logo" height="200px">
        </div>
        <div class='flex-center margin take-space'>
          <img src="${require('@/assets/vue.svg')}" alt="Vue Logo" height="200px">
        </div>
      </div>
      `,
      background: null
    },
    {
      type: 'section',
      title: 'There should be an agnostic solution',
      subtitle: null,
      content: null,
      html: null,
      background: null
    },
    {
      type: 'section',
      title: 'CSS Library',
      subtitle: null,
      content: null,
      html: null,
      background: null
    },
    {
      type: null,
      title: 'CSS Library (Bootstrap)',
      subtitle: null,
      content: null,
      html: `
<s-codemirror language="html" theme="dracula">
  <template>
    <!-- head -->
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <!-- link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" -->
      <title>Hello, world!</title>
    <!-- /head -->
    <!-- body -->
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <!-- script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" /script -->
      <!-- script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" /script -->
      <!-- script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" /script -->
    <!-- /body -->
  </template>
</s-codemirror>
      `,
      background: null
    },
    {
      type: null,
      title: 'Which looks like this',
      subtitle: null,
      content: null,
      html: `
      <div class='flex-center'>
        <div class='flex-center margin take-space'>
          <img src="${require('@/assets/bootstrap-buttons.png')}" alt="Bootstrap Buttons" style="width: 100%;">
        </div>
      </div>
      `,
      background: null
    },
    {
      type: 'section',
      title: 'JS Magic',
      subtitle: null,
      content: null,
      html: null,
      background: null
    },
    {
      type: null,
      title: 'JS Magic (Google Maps)',
      subtitle: null,
      content: null,
      html: `
<s-codemirror language="html" theme="dracula">
  <template>
    <!-- head -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Google Maps -->
      <!-- script src="https://maps.googleapis.com/maps/api/js?callback=initMap" async defer /script -->
    <!-- /head -->
    <!-- body -->
      <div id="map" style="height: 100vh; width: 100vw;"></div>
      <!-- script -->
        var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
          });
        }
      <!-- /script -->
    <!-- /body -->
  </template>
</s-codemirror>
      `,
      background: null
    },
    {
      type: null,
      title: 'And you get this',
      subtitle: null,
      content: null,
      html: `
      <div class='flex-center'>
        <img src="${require('@/assets/google-maps.png')}" style="width: 100%;">
      </div>
      `,
      background: null
    },
    {
      type: 'section',
      title: 'And both of these solutions are, well...',
      subtitle: null,
      content: null,
      html: null,
      background: null
    },
    {
      type: 'section',
      title: '🤮',
      subtitle: null,
      content: null,
      html: null,
      background: null
    },
    {
      type: 'section',
      title: 'WEB COMPONENTS FTW!',
      subtitle: null,
      content: null,
      html: null,
      background: null
    },
    {
      type: 'section',
      title: 'Web components are a set of web platform APIs that allow you to create new custom, reusable, ' +
      'encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the ' +
      'Web Component standards, will work across modern browsers, and can be used with any JavaScript library ' +
      'or framework that works with HTML.',
      subtitle: null,
      content: null,
      html: null,
      background: null
    },
    {
      type: null,
      title: 'Web Component are...',
      subtitle: null,
      content: null,
      html: `
      <div class='flex-center'>
        <div class='margin take-space'>
          <ul>
            <li>Custom Elements</li>
            <li>HTML Templates</li>
            <li>Shadow DOM</li>
            <li>HTML Imports</li>
          </ul>
        </div>
      </div>
      `,
      background: null
    },
    {
      type: 'blank',
      title: null,
      subtitle: null,
      content: null,
      html: null,
      background: require('@/assets/not-sure.jpg')
    },
    {
      type: null,
      title: null,
      subtitle: null,
      content: null,
      html: `
        <div class="full-width">
          <div class="take-space">
            <h4>Frameworks</h4>
            <div class="flex-center">
              <div class="take-space flex-center">
                <img src="${require('@/assets/angular.png')}" alt="Angular Logo" height="200px">
              </div>
              <div class="take-space flex-center">
                <img src="${require('@/assets/react.png')}" alt="React Logo" height="200px">
              </div>
              <div class="take-space flex-center">
                <img src="${require('@/assets/vue.svg')}" alt="Vue Logo" height="200px">
              </div>
            </div>
          </div>
          <div class="take-space">
            <h4>Web Components/Custom Elements</h4>
            <div class="flex-center">
              <div class="take-space flex-center">
                <img src="${require('@/assets/polymer.png')}" alt="Polymer Logo" height="200px">
              </div>
              <div class="take-space flex-center">
                <img src="${require('@/assets/stencil.png')}" alt="Stencil Logo" height="200px">
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      type: 'section',
      title: 'So we put some elements inside your elements!',
      subtitle: null,
      content: null,
      html: null,
      background: require(`@/assets/yo-dawg-grey.jpg`)
    }
  ];
}
</script>