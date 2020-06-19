<?php
if (!mail('oksana.mineeva.14@gmail.com', "Новый заказ", "Информация о заказе:

Имя: " . @$_POST['name']. "
Телефон: " . @$_POST['tel']. "
Номера: " . @$_POST['numbers']. "

Время отправления: " . date('Y-m-d H:i:s') . "", "From: numbers-ua.com\r\nContent-type: text/plain; charset=utf-8\r\n")) {
    echo "<h1>Возникла ошибка при отправке почты!</h1>";
} else {
    echo "<style> .js-form-succes {display: flex} </style>";
};


