const userName = document.querySelector(".username");
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const rePassword = document.querySelector('.rePassword');

const submit = document.querySelector('.submit')
submit.addEventListener('click', event => {
    event.preventDefault();
    if (document.querySelectorAll(".green").length == 4) {
        console.log('sia');
        window.location.reload();
    }else{
        document.querySelector('.alertText2').innerText = "لطفا تمامی فیلد ها را به درستی پر کنید"
    }
})

userName.addEventListener("input", (e) => {usenameValidation(e)});
const usenameValidation = (e) => {
    if (e.target.value) {
        if (e.target.value.match(/^[\u0600-\u06FF\s]+$/)) {
          wrong(e.target);
          alert(e.target, "از حروف فارسی استفاده نکنید");
        } else {
          corect(e.target);
          alert(e.target, "");
          if (!e.target.value.match(/^[\w]{6,10}/)) {
            wrong(e.target);
            alert(e.target, "باید 6 تا 10 کاراکتر باشد");
          } else {
            if (e.target.value.match(/["#" , "@" , "!" , "*" , "&" , "^" , "(" , ")" , "|" , "/" , "\\" , ";" , "$"  , "~" , "." , "," , "-" , "=" , "+" , "<" , ">"]/)) {
              wrong(e.target);
              alert(e.target, "فقط مجاز به استفاده از ( _ ) و اعداد هستید");
            }
          }
        }
    }else {
        wrong(e.target);
        alert(e.target, "لطفا این فیلد را پر کنید");
    }
}
// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
email.addEventListener("input", (e) => {emailValidation(e)});
const emailValidation = (e) => {
    if (e.target.value) {
        if (!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            wrong(e.target);
            alert(e.target, "لطفا ایمیل را به درستی وارد کنید");
        }
        else{
            corect(e.target);
            alert(e.target, "");
        }  
    }else {
        wrong(e.target);
        alert(e.target, "لطفا این فیلد را پر کنید");
    }
}

password.addEventListener("input", (e) => {passwordValidation(e)});
const passwordValidation = (e) => {
    if (e.target.value) {
        if (e.target.value.match(/^[\u0600-\u06FF\s]+$/)) {
            wrong(e.target);
            alert(e.target, "از حروف فارسی استفاده نکنید");
        }else {
            corect(e.target);
            alert(e.target, "");
            if (!e.target.value.match(/^[\w]{8,}/)) {
                wrong(e.target);
                alert(e.target, "رمز باید بیشتر از 8 رقم باشد");
            } else {
                if (e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)) {
                    corect(e.target);
                    alert(e.target, "");
                } else {
                    wrong(e.target);
                    alert(e.target, "از حروف کوچکو بزرگ و اعداد استفاده شود");
                }
            }
        }
    }else {
        wrong(e.target);
        alert(e.target, "لطفا این فیلد را پر کنید");
    }
}
rePassword.addEventListener("input", (e) => {rePasswordValidation(e)})
const rePasswordValidation = (e) => {
    if (e.target.value) {
        if (e.target.value === password.value) {
            corect(e.target);
            alert(e.target, "");
        } else {
            wrong(e.target);
            alert(e.target, "پسورد وارد شده مطابقت ندارد !");
        }
    }else {
        wrong(e.target);
        alert(e.target, "لطفا این فیلد را پر کنید");
    }
}

const corect = (element) => {
  element.classList.remove("wrong");
  element.classList.add("corect");
  element.parentElement.children[2].style.display = "block";
  element.parentElement.children[2].classList = "green";
  element.parentElement.children[2].name = "checkmark-circle";
};
const wrong = (element) => {
  element.classList.remove("corect");
  element.classList.add("wrong");
  element.parentElement.children[2].style.display = "block";
  element.parentElement.children[2].classList = "red";
  element.parentElement.children[2].name = "alert-circle";
};
const alert = (element, message) => {
  element.parentElement.children[3].innerText = message;
};