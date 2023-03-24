// const {Given, When, Then} = require('@wdio/cucumber-framework');
import {Given, When, Then} from '@wdio/cucumber-framework'
import { expect  } from 'chai'

import FrontPage from '../pageobjects/front-page.js'

Given('I am on the frontpage', async ()  => {
    await FrontPage.open()
  })

When('I click about us, and show the command about Kanggo', async ()  => {
    await FrontPage.aboutUs()
    await browser.pause(3000)
    const myText = await $(`//h2[@class='vc_custom_heading m-b-xs align-left']`)
    const text = await myText.isDisplayed()
    expect(text).to.be.true
  
})

When('I click layanan, i scrolling down', async () => {
    await FrontPage.theServices()
    await browser.execute('window.scrollBy(0, 500)')
  })

  When('I click Daftar Harga, i scrolling down',async () => {
    await FrontPage.priceList()
    await browser.execute('window.scrollBy(0, 500)')
  })

When('I click Inspirasi dan Solusi, and assert the command', async () => {
  await FrontPage.solutionsInspirations()
  await browser.pause(3000)
  const myText = await $(".page-content .wpb_text_column p")
  const text = await myText.isDisplayed()
  expect(text).to.be.true
})

When('I click Pusat Bantuan, scrolling down', async () => {
  await FrontPage.aboutHelp()
  await browser.execute('window.scrollBy(0, 500)')
})

When('I click Gabung Mitra, i scrolling down',async  () => {
  await FrontPage.joinMitra()
  await browser.execute('window.scrollBy(0, 500)')
})


  







// When(/^I try to login with username \"(.*)\" and password \"(.*)\"$/, async(username, password) => {
//     await FrontPage.login(username, password)
// })

// Then(/^I am successfully login with username \"(.*)\"$/, async(username) => {
//     await HomePage.verifyLoginSuccess(username)
// })