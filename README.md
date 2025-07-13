🧮 Kalkulator – projekt w HTML, CSS i JavaScript
To prosty kalkulator stworzony przy użyciu czystego HTML, CSS i JavaScript, pozwalający na wykonywanie podstawowych działań matematycznych.

✨ Funkcje:
Dodawanie, odejmowanie, mnożenie, dzielenie

Obsługa ułamków dziesiętnych (np. 3.14)

Przycisk +/- – zmienia znak ostatniej liczby

Przycisk = – wykonuje obliczenie

Przycisk CE – czyści cały input

Obsługa kliknięć za pomocą jednej wspólnej funkcji (bez tworzenia osobnych handlerów do każdego przycisku)

🗂 Struktura:
index.html – główny plik HTML z przyciskami kalkulatora

style.css – (opcjonalnie) stylizacja interfejsu

script.js – logika działania kalkulatora

🧠 Jak to działa?
Wszystkie przyciski mają klasę btn, a ich wartość jest odczytywana automatycznie po kliknięciu.

Ostatnia liczba może zostać otoczona nawiasami i zamieniona na liczbę ujemną (i odwrotnie), bez użycia skomplikowanych wyrażeń regularnych – wszystko zrobione "na piechotę".

eval() (lub podobna funkcja) może być używana do wykonania obliczeń po kliknięciu = (jeśli zostanie dodana).
