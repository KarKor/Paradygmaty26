--zadanie 4

factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n-1)
    
main :: IO ()
main = do
  print(factorial 4)

--zadanie 5

fibonacci :: Integer -> Integer
fibonacci 0 = 0
fibonacci 1=1
fibonacci n = fibonacci (n-1) + fibonacci (n-2)
    
main :: IO ()
main = do
  print(fibonacci 15)

--zadanie 6

minmax :: Integer -> Integer -> Integer -> Integer
minmax x y z = max x (max y z) - min x (min y z)
    
main :: IO ()
main = do
  print(minmax 1 7 4)

--zadanie 7

minmax :: Integer -> Integer -> Integer
minmax x y = x * x + y * y
    
main :: IO ()
main = do
  print(minmax 3 4)

--zadanie 8

lastDigit :: Integer -> Integer
lastDigit x = abs x  `rem` 10
    
main :: IO ()
main = do
  print(lastDigit 42)
  print(lastDigit 365)
  print(lastDigit (-17))