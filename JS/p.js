//hidden and show section like cash out, add money and transaction
function showSection(id){
    document.getElementById('idHere').classList.add('hidden')
    document.getElementById('idHere').classList.add('hidden')
    document.getElementById('idHere').classList.add('hidden')

    //show section
    document.getElementById(id).classList.remove('hidden')
}