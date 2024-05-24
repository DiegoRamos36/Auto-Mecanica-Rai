export function goService(msg: string) {
  if (msg) {
    const mensagem = `Olá, gostaria de fazer uma: ${msg}`;
    const number = '+5521992581436';
    window.location.href = `https://wa.me/${number}/?text=${mensagem}`;
  } else {
    console.log('Sem serviço');
  }
}

export function goTo(id: string) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }
}
