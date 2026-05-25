--zadabie 6e
main :: IO ()
main = do
  print $ split 4 [1,5,9,4,5,1,7, 2]
  print $ filter (>4) [1,2,5,7,2,4,0,9,2,5]
  print $ onlyEven [1,2,5,7,8,4,0,9,6,5]
  print $ doubleAll [1,2,5,7,8,4,0,9,6,5]
  print $ sumOfDigits 2867
  
split :: Ord a => a -> [a] -> ([a],[a])
split x [] = ([],[])
split x (y:ys)
  |y < x = (y:a,b)
  |y > x = (a,y:b)
  |otherwise = (a,b)
  where
    (a,b) = split x ys

--zadanie 7

filter' :: (a -> Bool) -> [a] -> [a]
filter' _ [] = []
filter' p (x:xs)
  | p x       = x : filter' p xs
  | otherwise = filter' p xs
  

--zadanie 8
  

onlyEven :: Integral a => [a] -> [a]
onlyEven a = onlyEven' a []

onlyEven' :: Integral a =>[a] -> [a] -> [a]
onlyEven' [] y = reverse y
onlyEven' (x:xs) y
  | x `rem` 2  == 0 = onlyEven' xs (x:y)
  | otherwise = onlyEven' xs y


--zadanie 9
  

doubleAll :: Integral a => [a] -> [a]
doubleAll a = doubleAll' a []

doubleAll' :: Integral a =>[a] -> [a] -> [a]
doubleAll' [] y = y
doubleAll' (x:xs) y = doubleAll' xs (y++[2*x])

--zadanie 10
  

sumOfDigits :: Int -> Int
sumOfDigits x= digitArrGen x []

digitArrGen :: Int -> [Int] -> Int
digitArrGen 0 y = sumArr y 0
digitArrGen x y = digitArrGen (x `div` 10) (y++[x `rem` 10])

sumArr :: [Int] -> Int -> Int
sumArr [] x = x
sumArr (y:ys) x = sumArr ys x+y