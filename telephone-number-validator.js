function telephoneCheck(str) {
  const regex = /^(1\s?)?(?:\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/
  return regex.test(str);
}

/*explanation

^ starts with
1 " " -> space can be optional & all 1 " " can be optional
followed by
EITHER - here \ is used to escape the parentheses - ( number 3 times ) EITHER number 3 times
followed by
space or - (which can be optional -> "stuck" with previous group) and a number 3 times
followed by
space or - (optional again) and a number 4 times
and with that the telephone has to end

*/

telephoneCheck("555-555-5555");