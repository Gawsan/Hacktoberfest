import random


class Tic_Tac_Toe:

  def __init__(self):
    self.board = []

  def createboard(self):
    for i in range(3):
      row = []
      for j in range(3):
        row.append('-')
      self.board.append(row)

  def getrandfirst(self):
    return random.randint(0, 1)

  def fixpos(self, row, col, player):
    self.board[row][col] = player

  def wincon(self, player):
    win = None
    n = len(self.board)
    for i in range(n):
      win = True
      for j in range(n):
        if self.board[i][j] != player:
          win = False
          break
      if win:
        return win

    for i in range(n):
      win = True
      for j in range(n):
        if self.board[j][i] != player:
          win = False
          break
      if win:
        return win

    win = True
    for i in range(n):
      if self.board[i][i] != player:
        win = False
        break
    if win:
      return win

    win = True
    for i in range(n):
      if self.board[i][n - 1 - i] != player:
        win = False
        break
    if win:
      return win
    return False

    for row in self.board:
      for item in row:
        if item == '-':
          return False
    return True

  def isboardfilled(self):
    for row in self.board:
      for item in row:
        if item == '-':
          return False
    return True

  def swapplayer(self, player):
    return 'X' if player == 'O' else 'O'

  def boardshow(self):
    for row in self.board:
      for item in row:
        print(item, end=" ")
      print()

  def start(self):
    self.createboard()
    player = 'X' if self.getrandfirst() == 1 else 'O'

    while True:
      print(f"{player}'s turn")
      print()
      self.boardshow()
      message = f'Row and Column to place (seperated by space) {player}: '

      choice = input(message).split()
      while ((len(choice) != 2)):
        print("Invalid input, must have 2 space seperated values")
        choice = input(message).split()
      
      try:
        row, col = list(map(int, choice))
        while (int(choice[0]) > 3 or int(choice[1]) > 3 or int(choice[0]) < 1 or int(choice[1]) < 1):
          print("Invalid input, value must be in between 1 and 3")
          choice = input(message).split()

        while (self.board[int(choice[0])-1][int(choice[1])-1] != '-'):
          print("Invalid place, it is already occupied")
          choice = input(message).split()

        self.fixpos(row - 1, col - 1, player)

        if self.wincon(player):
          print(f"{player} wins the game!")
          break

        if self.isboardfilled():
          print("Draw!")
          break

        player = self.swapplayer(player)
        print()
        # self.boardshow()
        print()
      except:
        print("Invalid input, value must be integer and should be between 1 and 3 ")
        choice = input(message).split()


game = Tic_Tac_Toe()
game.start()
