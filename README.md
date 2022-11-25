# [riteshgharat.github.io](https://riteshgharat.github.io/)
* Personal Website

# [Tax Invoice Generator](https://riteshgharat.github.io/tig/)
* Generate GST Invoice for free

# [Math-html.js](https://riteshgharat.github.io/math-html/)
### Perform Arithmetic Operation directly in HTML.
## Key Points:
* Direct Arithmetic Operation in HTML Doc.
* No need of javascript for Math operation.
* Can perform basic as we as High level math.

## Script: 
```html
<!--Math-html.js-->
<script src="https://min.gitcdn.link/cdn/riteshgharat/riteshgharat.github.io/main/math-html/math.js"></script>
```
## Tag:
```html
<!--with math tag-->
<math>2+2</math>

<!--without math tag-->

<!--using Class-->
<p class="math">2+2</p>
<!--using ID-->
<p id="math">2+2</p>

```
## Demo:
* ✅️ Space must be included after completing operation.
* ✅️ Text should not be included in "math" tag.
* ✅️ All most all javascript Math objects are supported.

```html
<p>Operation Value: [2+3*5/6] = <math>2+3*5/6</math></p>
<p>Operation Value: [sin(PI/2)] = <math>sin(PI/2)</math></p>
<p>Operation Value: [PI] = <math>PI</math></p>
```
## Dice:
```html
  <html>
  <head>
  <ttle>Dice Math-html.js</tile>
  <!--stylesheet-->
  <style type="text/css" media="all">
    .dice-con {
      width: 80%;
      height: 250px;
      margin-left: 10%;
      border: 2px solid #000;
      display: grid;
      place-items: center;
    }

    .dice-con .dice {
      width: 80px;
      height: 80px;
      background: royalblue;
      display: grid;
      place-items: center;
      border-radius: 5px;
      border: 2px solid #000;
      font-size: 30px
    }

    .dice-con .btn {
      width: 90px;
      height: 40px;
      border: 2px solid;
      cursor: pointer;
    }
  </style>
  </head>

  <body>
    <h1>Dice using <a href="https://riteshgharat.github.io/math-html/">Math-html.js<a></h1>
    <h2>Demo (Dice):</h2>
    <div class="dice-con">
      <math class="dice">floor(random()*10)</math><br>
      <button class="btn" onclick="location.reload()">Click</button>
    </div>

    <script src="https://min.gitcdn.link/cdn/riteshgharat/riteshgharat.github.io/main/math-html/math.js"></script>
  </body>
  </html>
```

# [CS Project](https://riteshgharat.github.io/csproject)
* CS project using HTML