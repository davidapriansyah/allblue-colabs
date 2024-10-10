function formatRupiah(value){
    // console.log(`Rp. ${Number(value).toLocaleString('id-ID')}`)
    return `Rp. ${Number(value).toLocaleString('id-ID')}`
}
// formatRupiah(300000000)

module.exports = formatRupiah