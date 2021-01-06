import { mount,shallowMount,createLocalVue } from '@vue/test-utils'
import SignUp from '../src/components/Uyeol.vue'
import SignIn from '../src/components/Login.vue'

const factory2 = () => {
    return shallowMount(SignIn, {
    });
  };

function signIn(emal,pass) {
    //var wrapperr=factory2()
    const wrapperr=mount(SignIn)
    var email=wrapperr.find('#EmailField')
    var password=wrapperr.find('#PasswordField')
    var button=wrapperr.find('#login_btn')
    email.value=emal
    password.value=pass
    try{
        //this.$fire.auth.signInWithEmailAndPassword(email,password)
        button.trigger('click')
        return true
    }
    catch(e){
        console.log(e)
        return false
    }
  }

const factory = () => {
    return shallowMount(SignUp, {
    });
  };


  test('are imformation true', () => {
    //var wrapper = factory();
    const wrapper=mount(SignUp)
    var name=wrapper.find('#name')
    var surname=wrapper.find('#surNameField')
    var email=wrapper.find('#e-mail')
    var emailagain=wrapper.find('#e-mailcheck')
    var password=wrapper.find('#password')
    var passwordagain=wrapper.find('#password-repeat')
    var checkbox=wrapper.find('#contractLink1')
    checkbox.checked=true
    //var subutton=wrapper.find('#btnAddNewCustomer')

    name.value='Zehra5'
    surname.value='Demir'
    email.value='zehrademir@gmail.com'
    emailagain.value='zehrademir@gmail.com'
    password.value='Zehrademir1'
    passwordagain.value='Zehrademir1'
    wrapper.find('button').trigger('click')
    //subutton.trigger('click')
    expect(signIn(email,password)).toBe(true)
  })
