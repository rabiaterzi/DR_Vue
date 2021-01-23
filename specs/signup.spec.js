import { mount,shallowMount,createLocalVue } from '@vue/test-utils'
import SignUp from '../src/components/Uyeol.vue'
import SignIn from '../src/components/Login.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const factory2 = () => {
    return shallowMount(SignIn, {
    });
  };

function signIn(emal,pass) {
    //var wrapperr=factory2()
    const store=new Vuex.Store(Store)
    const wrapperr=mount(SignIn,{store})
    /*const wrapperr=mount(SignIn)
    var email=wrapperr.find('#EmailField')
    var password=wrapperr.find('#PasswordField')
    var button=wrapperr.find('#login_btn')
    email.value=emal
    password.value=pass*/
    try{
        //this.$fire.auth.signInWithEmailAndPassword(email,password)
        //button.trigger('click')
        store.dispatch('signIn',{email:emal,password:pass})
        //wrapperr.vm.signIn({email:emal,password:pass})
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
    const store=new Vuex.Store(Store)
    const wrapper=mount(SignUp,{store})
    var name=wrapper.find('#name')
    var surname=wrapper.find('#surNameField')
    var email=wrapper.find('#e-mail')
    var emailagain=wrapper.find('#e-mailcheck')
    var password=wrapper.find('#password')
    var passwordagain=wrapper.find('#password-repeat')
    var checkbox=wrapper.find('#contractLink1')    
    //var subutton=wrapper.find('#btnAddNewCustomer')
    
//her biri için name.trigger('input') gibi
    name.value='Zehra'
    surname.value='Demir'
    email.value='zehrademir@gmail.com'
    emailagain.value='zehrademir@gmail.com'
    password.value='Zehrademir1'
    passwordagain.value='Zehrademir1'
    checkbox.checked=true
    wrapper.find('button').trigger('click')
    //subutton.trigger('click')
    expect(signIn(email,password)).toBe(true)

    name.value='Zehra5'
    surname.value='Demir'
    email.value='zehrademir@gmail.com'
    emailagain.value='zehrademir@gmail.com'
    password.value='Zehrademir1'
    passwordagain.value='Zehrademir1'
    checkbox.checked=true
    wrapper.find('button').trigger('click')
    expect(signIn(email,password)).toBe(false)

    name.value='Zehra'
    surname.value='Demir5'
    email.value='zehrademir@gmail.com'
    emailagain.value='zehrademir@gmail.com'
    password.value='Zehrademir1'
    passwordagain.value='Zehrademir1'
    checkbox.checked=true
    wrapper.find('button').trigger('click')
    expect(signIn(email,password)).toBe(false)

    name.value='Zehra'
    surname.value='Demir'
    email.value='zehrademir@gmail.com'
    emailagain.value='zehrademir@gmail.c'
    password.value='Zehrademir1'
    passwordagain.value='Zehrademir1'
    checkbox.checked=true
    wrapper.find('button').trigger('click')
    expect(signIn(email,password)).toBe(false)

    name.value='Zehra'
    surname.value='Demir'
    email.value='zehrademir@gmail.com'
    emailagain.value='zehrademir@gmail.com'
    password.value='Zehrademir1'
    passwordagain.value='Zehrademi'
    checkbox.checked=true
    wrapper.find('button').trigger('click')
    expect(signIn(email,password)).toBe(false)

    name.value='Zehra5'
    surname.value='Demir'
    email.value='zehrademir@gmail.com'
    emailagain.value='zehrademir@gmail.com'
    password.value='Zehrademir'
    passwordagain.value='Zehrademir'
    checkbox.checked=true
    wrapper.find('button').trigger('click')
    expect(signIn(email,password)).toBe(false)

    name.value='Zehra5'
    surname.value='Demir'
    email.value='zehrademir@gmail.com'
    emailagain.value='zehrademir@gmail.com'
    password.value='Zehrademir1'
    passwordagain.value='Zehrademir1'
    checkbox.checked=false
    wrapper.find('button').trigger('click')
    expect(signIn(email,password)).toBe(false)
  })

test('is login page vueinstance',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(SignIn,{store})
    expect(wrappernb.isVueInstance()).toBe(true)
})

test('is register page vueinstance',()=>{
  const store=new Vuex.Store(Store)
  const wrappernb=mount(SignUp,{store})
  expect(wrappernb.isVueInstance()).toBe(true)
})

test('are signup true',()=>{
  const store=new Vuex.Store(Store)
  const wrappernb=mount(SignUp,{store})
  const form=wrappernb.find('form')
  expect(form.name()).toBe('form')
  const label=wrappernb.find('label')
  expect(label.name()).toBe('label')
  const input=wrappernb.find('input')
  expect(input.name()).toBe('input')
})

test('does signin contain tages',()=>{
  const store=new Vuex.Store(Store)
  const wrappernb=mount(SignUp,{store})
  expect(wrappernb.contains('div')).toBe(true)
  expect(wrappernb.contains('label')).toBe(true)
  expect(wrappernb.contains('form')).toBe(true)
  expect(wrappernb.contains('input')).toBe(true)
  expect(wrappernb.contains('button')).toBe(true)
  expect(wrappernb.contains('img')).toBe(true)
})

test('are signin tages true',()=>{
  const store=new Vuex.Store(Store)
  const wrappernb=mount(SignIn,{store})
  const form=wrappernb.find('form')
  expect(form.name()).toBe('form')
  const label=wrappernb.find('label')
  expect(label.name()).toBe('label')
  const input=wrappernb.find('input')
  expect(input.name()).toBe('input')
})

test('does signin contain tages',()=>{
  const store=new Vuex.Store(Store)
  const wrappernb=mount(SignIn,{store})
  expect(wrappernb.contains('div')).toBe(true)
  expect(wrappernb.contains('label')).toBe(true)
  expect(wrappernb.contains('form')).toBe(true)
  expect(wrappernb.contains('input')).toBe(true)
  expect(wrappernb.contains('button')).toBe(true)
  expect(wrappernb.contains('img')).toBe(true)
})

test('has the expected html structure',()=>{
  const store=new Vuex.Store(Store)
  const wrapperbp=mount(SignIn,{store})
  expect(wrapperbp.element).toMatchSnapshot()

  const wrappers=mount(SignUp,{store})
  expect(wrappers.element).toMatchSnapshot()
})