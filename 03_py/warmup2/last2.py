'''
Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).
last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxxaaxx') → 2
Expected	Run		
last2('hixxhi') → 1	1	OK	
last2('xaxxaxaxx') → 1	1	OK	
last2('axxxaaxx') → 2	2	OK	
last2('xxaxxaxxaxx') → 3	3	OK	
last2('xaxaxaxx') → 0	0	OK	
last2('xxxx') → 2	2	OK	
last2('13121312') → 1	1	OK	
last2('11212') → 1	1	OK	
last2('13121311') → 0	0	OK	
last2('1717171') → 2	2	OK	
last2('hi') → 0	0	OK	
last2('h') → 0	0	OK	
last2('') → 0	0	OK	
'''
def last2(str):
  last = str[len(str)-2:len(str)]
  retCount = 0
  counter = 0
  
  while counter < len(str)-2:
    if str[counter] == last[0]:
      if str[counter + 1] == last[1]:
        retCount += 1
    counter = counter + 1
    
  return retCount
