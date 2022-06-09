function fetchData(url, callback) {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', url, true)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(null, xhr.responseText)
      } else {
        const err = new Error(`Error: ${url}`);
        return err
      }
    }
  }
  xhr.send();
}

export default fetchData;