const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()})`

const func = async () => {
    const response = await window.versions.ping()
    alert(response)
    console.log(response)
}

func()