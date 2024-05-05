const box = document.getElementById('box');
const hOffsetInput = document.getElementById('h-offset');
const vOffsetInput = document.getElementById('v-offset');
const blurInput = document.getElementById('blur');
const spreadInput = document.getElementById('spread');
const colorInput = document.getElementById('color');
const codeTextarea = document.getElementById('code');
const copyButton = document.getElementById('copy-button');
const resetButton = document.getElementById('reset-button');

function updateBoxShadow() {
    const hOffset = hOffsetInput.value + 'px';
    const vOffset = vOffsetInput.value + 'px';
    const blur = blurInput.value + 'px';
    const spread = spreadInput.value + 'px';
    const color = colorInput.value;

    const boxShadowValue = `${hOffset} ${vOffset} ${blur} ${spread} ${color}`;

    box.style.boxShadow = boxShadowValue;
    codeTextarea.value = `box-shadow: ${boxShadowValue};`;
}

function copyCodeToClipboard() {
    codeTextarea.select();
    document.execCommand('copy');
}

function resetValues() {
    hOffsetInput.value = 0;
    vOffsetInput.value = 0;
    blurInput.value = 0;
    spreadInput.value = 0;
    colorInput.value = '#3498db';

    updateBoxShadow();
}

hOffsetInput.addEventListener('input', updateBoxShadow);
vOffsetInput.addEventListener('input', updateBoxShadow);
blurInput.addEventListener('input', updateBoxShadow);
spreadInput.addEventListener('input', updateBoxShadow);
colorInput.addEventListener('input', updateBoxShadow);
copyButton.addEventListener('click', copyCodeToClipboard);
resetButton.addEventListener('click', resetValues);

updateBoxShadow();