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
      <div v-if="slide.inline" v-html="slide.inline"></div>
      <br v-if="slide.codeContent && slide.code && slide.inline">
      <juicy-ace-editor v-if="slide.codeContent && slide.code" fontSize="28px" theme="ace/theme/monokai" :mode="'ace/mode/'+slide.code" class="height-80">{{ slide.codeContent }}</juicy-ace-editor>
    </nge-slide>
    <nge-slides-progress-bar></nge-slides-progress-bar>
  </nge-slides-wrapper>
</template>

<style>
  .nope {
    text-decoration: line-through;
  }
</style>


<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public handle = '@MichaelSolati';
  public hashtag = '#CustomElements';
  public slides = [
    {
      type: 'title',
      title: 'Yo Dawg, I Heard You Like Components',
    },
    {
      title: 'About Me',
      inline: `
      <div class='flex-center'>
        <img src='${require(`@/assets/michael.jpg`)}' alt='Picture of Michael' height='400px' class='margin round-img'>
        <div class='margin take-space'>
          <ul>
            <li>Frontend Developer
              <ul>
                <li>5 years total</li>
                <li>3 years of Angular</li>
              </ul>
            </li>
            <li>Drinker of coffee</li>
            <li>Lover of memes</li>
            <li>Developer Program Engineer @ Google
              <ul>
                <li>web.dev</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      `
    },
    {
      type: 'section',
      title: 'Who here has had to write front end code?'
    },
    {
      title: 'Maybe something like these?',
      inline: `
      <div class='flex-center white'>
        <div class='flex-center margin take-space'>
          <vaadin-button onclick="alert('You clicked me')">Click Me!</vaadin-button>
        </div>
        <div class='flex-center margin take-space'>
          <vaadin-date-picker label="IT'S TODAY!!!" value="${(new Date()).toISOString().split('T')[0]}">
            </vaadin-date-picker>
        </div>
      </div>
      `
    },
    {
      type: 'blank',
      background: require(`@/assets/npm.png`)
    },
    {
      type: 'blank',
      background: require(`@/assets/npm-count.png`)
    },
    {
      title: 'Buttons for every framework...',
      inline: `
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
      `
    },
    {
      type: 'section',
      title: 'There should be an agnostic solution'
    },
    {
      type: 'section',
      title: 'CSS Library'
    },
    {
      title: 'CSS Library (Bootstrap)',
      codeContent: `<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <title>Hello, world!</title>
</head>
<body>
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
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"><\/script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"><\/script>
</body>`,
      code: 'html'
    },
    {
      title: 'Which looks like this',
      inline: `
      <div class='flex-center'>
        <div class='flex-center margin take-space'>
          <img src="${require('@/assets/bootstrap-buttons.png')}" alt="Bootstrap Buttons" style="width: 100%;">
        </div>
      </div>
      `
    },
    {
      type: 'section',
      title: 'JS Magic'
    },
    {
      title: 'JS Magic (Google Maps)',
      codeContent: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Google Maps -->
  <script src="https://maps.googleapis.com/maps/api/js?callback=initMap" async defer><\/script>
</head>
<body>
  <div id="map" style="height: 100vh; width: 100vw;"></div>
  <script>
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }
  <\/script>
</body>`,
      code: 'html'
    },
    {
      title: 'And you get this',
      inline: `
      <div class='flex-center'>
        <img src="${require('@/assets/google-maps.png')}" style="width: 100%;">
      </div>
      `
    },
    {
      type: 'section',
      title: 'And both of these solutions are, well...'
    },
    {
      type: 'section',
      title: '🤮'
    },
    {
      type: 'section',
      title: 'WEB COMPONENTS FTW!'
    },
    {
      type: 'section',
      title: 'Web components are a set of web platform APIs that allow you to create new custom, reusable, ' +
      'encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the ' +
      'Web Component standards, will work across modern browsers, and can be used with any JavaScript library ' +
      'or framework that works with HTML.'
    },
    {
      title: 'Web Component are...',
      inline: `
      <div class='flex-center'>
        <div class='margin take-space'>
          <ul>
            <li>Custom Elements</li>
            <li>HTML Templates</li>
            <li>Shadow DOM</li>
            <li class="nope">HTML Imports</li>
          </ul>
        </div>
      </div>
      `
    },
    {
      type: 'blank',
      background: require('@/assets/not-sure.jpg')
    },
    {
      inline: `
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
      title: 'How Do We Create Custom Elements?'
    },
    {
      codeContent: `// ES6 Class That Extends HTMLElement
class HelloWorld extends HTMLElement {
  // We Can Have Attributes And Listen To Changes
  static observedAttributes = ['name'];
  attributeChangesCallback(key, oldVal, newVal) {}

  // We Have Lifecycle Hooks
  connectedCallBack(){}
  disconnectedCallBack(){}

  // We Can Get And Set Properties
  set name(val) {}
  get name() {}

  // We Can Also Dispatch Events!!!!
  onClick() {
    this.dispatchEvent(new CustomEvent('nameChange', {}));
  }
}

// Register to the Browser from \`customElements\` API
customElements.define('hello-world', HelloWorld);`,
      code: 'javascript'
    },
    {
      inline: `
        <div class="full-width">
          <div class="take-space">
            <h4>Tools To Build Custom Elements</h4>
            <div class="flex-center">
              <div class="take-space flex-center">
                <img src="${require('@/assets/polymer.png')}" alt="Polymer Logo" height="200px">
              </div>
              <div class="take-space flex-center">
                <img src="${require('@/assets/stencil.png')}" alt="Stencil Logo" height="200px">
              </div>
            </div>
          </div>
          <div class="take-space">
            <h4>Custom Element Libraries</h4>
            <div class="flex-center">
              <div class="take-space flex-center">
                <img src="${require('@/assets/vaadin.svg')}" alt="Vaadin Logo" height="200px">
              </div>
              <div class="take-space flex-center">
                <img src="${require('@/assets/ionic.png')}" alt="Ionic Logo" height="200px">
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: 'Deja vu?',
      force: true,
      inline: `
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
      codeContent: `<div class='flex-center white'>
  <div class='flex-center margin take-space'>
    <vaadin-button onclick="alert('You clicked me')">Click Me!</vaadin-button>
  </div>
  <div class='flex-center margin take-space'>
    <vaadin-date-picker label="IT'S TODAY!!!" value="${(new Date()).toISOString().split('T')[0]}">
      </vaadin-date-picker>
  </div>
</div>`,
      code: 'html'
    },
    {
      type: 'section',
      title: 'But wait, how can I do that?'
    },
    {
      background: require(`@/assets/just-do-it.webp`)
    },
    {
      type: 'section',
      title: 'So we put some elements inside your elements!',
      background: require(`@/assets/yo-dawg-grey.jpg`)
    },
    {
      type: 'section',
      title: 'https://bit.ly/BlinkTwo'
    },
    {
      inline: `
        <typeform-widget url="https://michaelsolati.typeform.com/to/F7Cu8z"></typeform-widget>
      `
    },
    {
      background: require(`@/assets/questions.gif`)
    },
    {
      inline: `
        <br>
        <br>
        <br>
        <div class="flex-center">
          <div>
            <div class="flex-center">
              <h3>I'm On The Web</h3>
            </div>
            <div class="flex-center">
              <img src="${require('@/assets/github.png')}" alt="GitHub Logo" height="200px">
              <img src="${require('@/assets/linkedin.png')}" alt="LinkedIn Logo" height="200px">
              <img src="${require('@/assets/dev.to.svg')}" alt="DEV.to Logo" height="200px">
              <img src="${require('@/assets/twitter.png')}" alt="Twitter Logo" height="200px">
            </div>
            <div class="flex-center">
              <h3>@MichaelSolati</h3>
            </div>
          </div>
        </div>
      `
    },
  ];
}
</script>