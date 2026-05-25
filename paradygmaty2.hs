--zadanie 3

main :: IO ()
main = do
  print $ rev [1,2,3]
  
rev :: [a] -> [a]
rev a = rev' a []

rev' :: [a] -> [a] -> [a]
rev' [] b = b
rev' (x:xs) b = rev' xs (x:b)


--
main :: IO ()
main = do
  print $ tab
  
tab=[(x,y,x*y) |
  x <- [1..12], y <- [1..12]]
--

main :: IO ()
main = do
  print $ gen colors
  
colors = ["black", "white", "blue", "yellow", "red"]

gen :: [String] -> [(String, String)]
gen [] = []
gen (x:xs) = [(x,y) | y <- xs] ++ gen xs

--6 a-d
main :: IO ()
main = do
  print $ delete 4 [1,2,3,4,5,6,7]

append l m = l ++ m

member :: Eq a => a -> [a] -> Bool
member x [] = False
member x (y:ys) = x == y || member x ys

last' :: [a] -> a
last' [x] = x
last' (x:xs) = last' xs

delete :: Eq a=> a -> [a] -> [a]
delete x [] = []
delete x (y:ys) 
  | x==y = delete x ys 
  | otherwise = y : delete x ys

--6e
main :: IO ()
main = do
  print $ split 4 [1,5,9,4,5,1,7, 2]

append l m = l ++ m

member :: Eq a => a -> [a] -> Bool
member x [] = False
member x (y:ys) = x == y || member x ys

last' :: [a] -> a
last' [x] = x
last' (x:xs) = last' xs

delete :: Eq a=> a -> [a] -> [a]
delete x [] = []
delete x (y:ys) 
  | x==y = delete x ys 
  | otherwise = y : delete x ys
  
  
split :: Ord a => a -> [a] -> ([a],[a])
split x [] = ([],[])
split x (y:ys)
  |y < x = (y:a,b)
  |y > x = (a,y:b)
  |otherwise = (a,b)
  where
    (a,b) = split x ys