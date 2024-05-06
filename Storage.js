$(window).load(function () {
  doShowAll();
});

function CheckBrowser() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    return true;
  } else {
    return false;
  }
}

function doShowAll() {
  if (CheckBrowser()) {
    var key = "";
    var list = "<tr><th>Item</th><th>Value</th></tr>\n";
    var i = 0;
    for (i = 0; i <= localStorage.length - 1; i++) {
      key = localStorage.key(i);
      list +=
        "<tr><td>" +
        key +
        "</td>\n<td>" +
        localStorage.getItem(key) +
        "</td></tr>\n";
    }
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
      list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
    }
    document.getElementById("list").innerHTML = list;
  } else {
    alert("Cannot save shopping list as your browser does not support HTML 5");
  }
}

function RemoveItem() {
  var name = document.forms.ShoppingList.name.value;
  document.forms.ShoppingList.data.value = localStorage.removeItem(name);
  doShowAll();
}

function ModifyItem() {
  var name1 = $("#name").val();
  var data1 = $("#data").val();
  if (localStorage.getItem(name1) != null) {
    //update
    localStorage.setItem(name1, data1);
    var new_info = localStorage.getItem(name1);
    $("#data").val(new_info);
  }

  doShowAll();
}
