Как теперь нам избавиться от недостатка, когда вы если поменяем что-то в родителе, то данные не изменятся в компонентах.
Перед этим мы делали решения только когда изменения идут от ребенка к родителю.

И теперь задача, как сделать двусторонюю синхронизацию в компоненте форм.

Нам нужно проверять, если входной параметр отличается от локальной копии, то нам нужно его обновлять.
Ранее мы только отслеживали локальное состояние.
При его изменение мы пораждали событие. И родителю отправляли обновленные данные.
А сейчас еще родитель присылает нам новые данные, а мы их никак не используем, не обрабатываем.

А так же нужно сделать с входным параметром.
Тут главное не вызвать рекурсию - это безконечный цикл.

Еще раз суть проблемы.
Мы в начале данного примера, просто постоянно обновляли и следили за обновлением данных.
И получился бесконечный цикл, всегда везде обновляется.
И нам тогда нужно в одном из вотчеров сделать проверку на неравенство данных, если они разные то стоп цикл.




deep: true => глубокое отслеживание.
