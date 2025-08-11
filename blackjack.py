def value_of_card(card):
    """Determine the scoring value of a card.
    :param card: str - given card.
    :return: int - value of a given card.  See below for values.
    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 1
    3.  '2' - '10' = numerical value.
    """
    if card=='K' or card=='Q' or card=='J' :  
        h=10
    elif card=='A' :
        h=1
    else:
        h=int(card)
    return h

def higher_card(card_one, card_two):
    """Determine which card has a higher value in the hand.
    :param card_one, card_two: str - cards dealt in hand.  See below for values.
    :return: str or tuple - resulting Tuple contains both cards if they are of equal value.
    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 1
    3.  '2' - '10' = numerical value.
    """

    if card_one=='K' or card_one=='Q' or card_one=='J' :  
        h1=10
    elif card_one=='A' :
        h1=1
    else:
        h1=int(card_one)

    if card_two=='K' or card_two=='Q' or card_two=='J' :  
        h2=10
    elif card_two=='A' :
        h2=1
    else:
        h2=int(card_two)
    
    if h1==h2:
        return card_one, card_two
    elif h1>h2:
        return card_one
    elif h2>h1:
        return card_two
        

def value_of_ace(card_one, card_two):
    """Calculate the most advantageous value for the ace card.
    :param card_one, card_two: str - card dealt. See below for values.
    :return: int - either 1 or 11 value of the upcoming ace card.
    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 11 (if already in hand)
    3.  '2' - '10' = numerical value.
    """
    if card_one=='K' or card_one=='Q' or card_one=='J' :  
        h1=10
    elif card_one=='A' :
        h1=1
    else:
        h1=int(card_one)

    if card_two=='K' or card_two=='Q' or card_two=='J' :  
        h2=10
    elif card_two=='A' :
        h2=1
    else:
        h2=int(card_two)
        
    if card_one=='A' or card_two=='A':
        s=1
        return s
    if h1+h2<=10:
        s=11
    else:
        s=1
    return s


def is_blackjack(card_one, card_two):
    """Determine if the hand is a 'natural' or 'blackjack'.
    :param card_one, card_two: str - card dealt. See below for values.
    :return: bool - is the hand is a blackjack (two cards worth 21).
    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 11 (if already in hand)
    3.  '2' - '10' = numerical value.
    """
    if card_one=='K' or card_one=='Q' or card_one=='J' :  
        h1=10
    elif card_one=='A' :
        h1=1
    else:
        h1=int(card_one)

    if card_two=='K' or card_two=='Q' or card_two=='J' :  
        h2=10
    elif card_two=='A' :
        h2=1
    else:
        h2=int(card_two)
        
    if (card_one=='A' and card_two=='K') or (card_two=='A' and card_one=='K'):
        return True
    elif (card_one=='A' and card_two=='10') or (card_two=='A' and card_one=='10'):
        return True
    elif h1+h2!=21:
        return False

def can_split_pairs(card_one, card_two):
    """Determine if a player can split their hand into two hands.
    :param card_one, card_two: str - cards dealt.
    :return: bool - can the hand be split into two pairs? (i.e. cards are of the same value).
    """
    cc=['Q', 'K', '10', 'J']
    if card_one in cc and card_two in cc:
        return True
    elif (card_one=='10' and card_two=='A') and (card_one=='A' and card_two=='10'):
        return True
    elif card_one==card_two:
        return True
    else:
        return False

def can_double_down(card_one, card_two):
    """Determine if a blackjack player can place a double down bet.
    :param card_one, card_two: str - first and second cards in hand.
    :return: bool - can the hand can be doubled down? (i.e. totals 9, 10 or 11 points).
    """
    cc = ['Q', 'K', 'J']

    if card_one in cc:
        val_one = 10
    elif card_one == 'A':
        val_one = 1
    else:
        val_one = int(card_one)

    if card_two in cc:
        val_two = 10
    elif card_two == 'A':
        val_two = 1
    else:
        val_two = int(card_two)

    total = val_one + val_two

    return total in [9, 10, 11]


#Sample usage for testing:
print(value_of_card('K'))  # 10
print(higher_card('4', '6'))  # 6
print(value_of_ace('6', 'K'))  # 1
print(is_blackjack('A', 'K'))  # True
print(can_split_pairs('Q', 'K'))  # True
print(can_double_down('10', '2'))  # False