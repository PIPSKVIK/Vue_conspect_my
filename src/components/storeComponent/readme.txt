1)  Рассматривается пример логина пользователя.
        когда мы можем хранить данные в app компоненте (root).
        И каждый раз, когда нужно получить или изменить данные, мы обрашаемся к этому компоненту.

        Но такой полход не очень, в том случае если у нас приложение очень маленькое, тогда еще можно.
        Но в таком случае, очень сложно отслеживаются данные.
        Но к root обращаться не очень хорошая практика.


2)  Так же, есть какое-то решение с Vue observable.
        Функция Vue-observable - делает объект реактивным.
        С таким решением не будут работать Vue DevTools.

3)  Стор делачть через provide inject.
        Но не самаое удобное решение, я думаю не стоит использовать.

4)  VueX
