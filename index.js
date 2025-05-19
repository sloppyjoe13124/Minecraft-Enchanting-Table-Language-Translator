const encodeInput = document.getElementById("encode-input")
const decodeInput = document.getElementById("decode-input")
const submitEncode = document.getElementById("submit-encode")
const submitDecode = document.getElementById("submit-decode")
const encodeCopyBtn = document.getElementById("copy-encode")
const enCopyConfirm = document.getElementById("en-copy-confirm")
const decodeCopyBtn = document.getElementById("copy-decode")
const deCopyConfirm = document.getElementById("de-copy-confirm")
const clearButton = document.querySelectorAll(".clearBtn")
function clearInputs() {
  encodeInput.value = ""
  decodeInput.value = ""
}
function encode() {
   let output = 
   encodeInput.value
   .replace(/a/gi, "ᔑ")
   .replace(/b/gi, "ʖ")
   .replace(/c/gi, "ᓵ")
   .replace(/d/gi, "↸")
   .replace(/e/gi, "ᒷ")
   .replace(/f/gi, "⎓")
   .replace(/g/gi, "⊣")
   .replace(/h/gi, "⍑")
   .replace(/i/gi, "╎")
   .replace(/j/gi, "⋮")
   .replace(/k/gi, "ꖌ")
   .replace(/l/gi, "ꖎ")
   .replace(/m/gi, "ᒲ")
   .replace(/n/gi, "リ")
   .replace(/o/gi, "𝙹")
   .replace(/p/gi, "!¡")
   .replace(/q/gi, "ᑑ")
   .replace(/r/gi, "∷")
   .replace(/s/gi, "ᓭ")
   .replace(/t/gi, "ℸ")
   .replace(/u/gi, "⚍")
   .replace(/v/gi, "⍊")
   .replace(/w/gi, "∴")
   .replace(/x/gi, "／")
   .replace(/y/gi, "｜｜")
   .replace(/z/gi, "⨅");
   decodeInput.value = output
}
function decode() {
   let output = 
   decodeInput.value
   .replace(/ᔑ/gi, "a")
   .replace(/ʖ/gi, "b")
   .replace(/ᓵ/gi, "c")
   .replace(/↸/gi, "d")
   .replace(/ᒷ/gi, "e")
   .replace(/⎓/gi, "f")
   .replace(/⊣/gi, "g")
   .replace(/⍑/gi, "h")
   .replace(/╎/gi, "i")
   .replace(/⋮/gi, "j")
   .replace(/ꖌ/gi, "k")
   .replace(/ꖎ/gi, "l")
   .replace(/ᒲ/gi, "m")
   .replace(/リ/gi, "n")
   .replace(/𝙹/gi, "o")
   .replace(/!¡/gi, "p")
   .replace(/ᑑ/gi, "q")
   .replace(/∷/gi, "r")
   .replace(/ᓭ/gi, "s")
   .replace(/ℸ/gi, "t")
   .replace(/⚍/gi, "u")
   .replace(/⍊/gi, "v")
   .replace(/∴/gi, "w")
   .replace(/／/gi, "x")
   .replace(/｜｜/gi, "y")
   .replace(/⨅/gi, "z");
   encodeInput.value = output
}
function encodeCopy() {
    navigator.clipboard.writeText(encodeInput.value)
        /*.then(() => {
          enCopyConfirm.innerText = "Copied!"
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
          enCopyConfirm.innerText = "Failed to copy."
        });*/
}
function decodeCopy() {
    navigator.clipboard.writeText(decodeInput.value)
        /*.then(() => {
          deCopyConfirm.innerText = "Copied!"
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
          deCopyConfirm.innerText = "Failed to copy."
        });*/
}
submitEncode.onclick = encode
submitDecode.onclick = decode
encodeCopyBtn.onclick = encodeCopy
decodeCopyBtn.onclick = decodeCopy
clearButton.forEach(button => {
  button.onclick = clearInputs;
})
