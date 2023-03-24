// const Page = require('./page')
import Page from './page.js'

class FrontPage extends Page {
    
    get tentangKami() {
        return $(`//a[text()='Tentang Kami']`)
    }
    
    get layanan() {
        return $(`//a[text()='Layanan']`)
    }

    get daftarHarga() {
        return $(`//a[text()='Daftar Harga']`)
    }

    get inspirasiDanSolusi() {
        return $(`//a[text()='Inspirasi & Solusi']`)
    }

    get pusatBantuan() {
        return $(`//a[text()='Pusat Bantuan']`)
    }

    get gabungMitra() {
        return $(`//a[text()='Gabung Mitra']`)
    }

    async aboutUs() {
        await this.tentangKami.click()
    }

    async theServices() {
        await this.layanan.click()
    }

    async priceList() {
        await this.daftarHarga.click()
    }

    async solutionsInspirations() {
        await this.inspirasiDanSolusi.click()
    }

    async aboutHelp() {
        await this.pusatBantuan.click()
    }

    async joinMitra() {
        await this.gabungMitra.click()
    }

    // async login(username, password) {
    //     await this.linkTextLogin.click()
    //     await this.isBtnLoginDisplayed()
    //     await this.inputUsername.setValue(username)
    //     await this.inputPassword.setValue(password)

    //     await this.buttonLogin.click()
    // }

    // async isBtnLoginDisplayed () {
    //     await (await this.buttonLogin).waitForDisplayed(2000);
    //     return await (await this.buttonLogin).isDisplayed();
    // }

    open() {
        return super.open()
    }

}

// module.exports = new FrontPage()
export default new FrontPage