let showValue = '';
document.getElementById('result').value = '0';

function showResult(value) {
    // Jika showValue kosong dan value yang di input adalah operator atau kurung, jangan tampilkan hasil
    if ((showValue === '' && value === ')') || (['+', '-', '*', '/', '.'].includes(showValue.slice(-1)) && ['+', '-', '*', '/', '.', '(', ')'].includes(value))) {
        return;
    }    
    
    // Jika showValue sudah berakhir dengan operator atau kurung dan value setelah angka adalah operator atau kurung, jangan tambahkan operator atau kurung lagi
    if (['+', '-', '*', '/', '.', '('].includes(showValue.slice(-1)) && ['+', '-', '*', '/', '.', '(', ')'].includes(value)) {
        return;
    }

    showValue += value;
    document.getElementById('result').value = showValue;
}

function deleteResult() {
    showValue = '';
    document.getElementById('result').value = '0';
}

function equal() {
    if (showValue.trim() === '') {
        return; // Jangan lakukan apa pun jika showValue kosong atau hanya spasi
    }

    let previousValue = showValue; // Simpan nilai sebelumnya

    try {
        let result = eval(showValue);
        document.getElementById('result').value = result;
        showValue = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        setTimeout(() => {
            document.getElementById('result').value = previousValue; // Tampilkan nilai sebelumnya
        }, 2000);
    }
}

function deleteOnce() {
    if (showValue.length > 0) {
        showValue = showValue.slice(0, -1);
        if (showValue.length > 0) {
            document.getElementById('result').value = showValue;
        } else {
            document.getElementById('result').value = '0';
        }
    } else {
        document.getElementById('result').value = '0';
    }
}

function openIgURL() {
    window.open("https://www.instagram.com/zzzeeee05", "_blank");
}
