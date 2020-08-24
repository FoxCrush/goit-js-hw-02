function formatString (string, maxLength = 40) {
    // Write code under this line
    console.log(string.slice(0,maxLength))

    let letters = ''
    let words = ''
    // console.log(string.length)
    if (string.length < maxLength) {
        return string
    } else {
        string = string.slice(0,maxLength) + '...'

        return string
    }
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'