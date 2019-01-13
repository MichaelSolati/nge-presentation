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
  public hashtag = '#forwardjs';
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
      type: null,
      title: 'CSS Library (Bootstrap)',
      subtitle: null,
      content: null,
      html: `
<s-codemirror language="html" theme="dracula">
  <template>
    <!doctype html>
    <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <!-- link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" -->
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
      <!-- script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" /script -->
      <!-- script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" /script -->
      <!-- script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" /script -->
    </body>
    </html>
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
      title: 'So we put some elements inside your elements!',
      subtitle: null,
      content: null,
      html: null,
      background: require(`@/assets/yo-dawg-grey.jpg`)
    }
  ];
}
</script>