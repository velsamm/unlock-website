

export const ContactForm = () => {
    // const handleForm = useCallback(() => {
    //     const fio = document.querySelector('[name="fio"]').value
    //     const phone = document.querySelector('[name="phone"]').value
    //     const email = document.querySelector('[name="email"]').value
    //     const source = 'unlock'
    //
    //     const xmlHttpBuilder = new XMLHttpRequest()
    //     xmlHttpBuilder.open('post', '/send')
    //     xmlHttpBuilder.setRequestHeader('Content-Type', 'application/json')
    //     const payload = JSON.stringify({ name: fio, phone, email, source })
    //     xmlHttpBuilder.send(payload)
    //     xmlHttpBuilder.onload = function () {
    //         if (xmlHttpBuilder.status !== 200) {
    //             alert('Ошибка при отправке заявки')
    //         } else {
    //             alert('Заявка принята успешно')
    //         }
    //     }
    // }, [])

    return (
      <div className="contact-form">
          {/*<div className="arrow">*/}
          {/*    <Image src={contactsPic} alt='contactsPic' />*/}
          {/*</div>*/}
          {/*<div className="title">*/}
          {/*    <span>Оставьте свои контакты</span>*/}
          {/*</div>*/}
          <div className="title">
                <span>
                    Мы свяжемся с вами и поможем разблокировать ваши средства
                </span>
          </div>

          <div className="col grow-1 contact-form-content-inner">
              <input
                className="w-full h-100"
                placeholder="ФИО"
                name="fio"
              />
          </div>
          <div className="col grow-1 contact-form-content-inner">
              <input
                className="w-full h-100"
                placeholder="Номер телефона"
                name="phone"
              />
          </div>
          <div className="col grow-1 contact-form-content-inner">
              <input
                className="w-full h-100"
                placeholder="Email"
                name="email"
              />
          </div>
          <div className="col grow-1">
              {/*<button className="btn" onClick={handleForm}>*/}
              {/*    Отправить*/}
              {/*</button>*/}
              <button className="btn">
                  Отправить
              </button>

          </div>

          {/*<div className="d-flex column gap-10">*/}

          {/*</div>*/}
      </div>
    )
}
