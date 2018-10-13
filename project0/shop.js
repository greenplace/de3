
<script src="https://newprolab-zs.ml/divolte.js"></script>

<script>

function addEvent(element, evnt, funct){
  if (element.attachEvent)
      return element.attachEvent('on'+evnt, funct);
  else
      return element.addEventListener(evnt, funct, false);
}

addEvent(document, "DOMContentLoaded", function(event) {
   try {
    var elem = document.getElementsByClassName('btn btn-primary btn-lg d-none d-sm-inline-block')[0];
    addEvent(
      elem,
      'click',
      function () { 
          divolte.signal('order', {price: document.getElementsByClassName('bx-soa-cart-d')[5].innerHTML.replace(' руб.', '').replace(' ', '')});
          console.log('path - '+window.location.href);
      }
    );
  } catch (err) {
    console.log(err)
  }
})

</script>
