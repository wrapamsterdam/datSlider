# datSlider
A fully responsive horizontal jQuery slider with included lightbox.

## Dependencies
- jQuery
- jQuery UI
- jQuery SmoothDivScroll 1.3

## Basic markup
```html
<div class="slider" id="slider1">
  <div class="slides">
    <img class="slide" src="test.jpg"/>
    <img class="slide" src="test.jpg"/>
    <img class="slide" src="test.jpg"/>
  </div>
</div>
```

```javascript
jQuery( document ).ready(function( $ ) {
  datSlider("#slider1");
});
```
