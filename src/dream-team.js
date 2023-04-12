const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) 
{
     if(Array.isArray(members) == false)
      {
        return false
      }
      var arrayOnlyString = []
      for (let i = 0; i < members.length; i++)
      {
      if(typeof (members[i]) === "string")
      {
          arrayOnlyString.push(members[i])
      }
      }
      

      if (arrayOnlyString.length === 0)
      {
        return false
      }



      var withSpase = []
      for (let i = 0; i < arrayOnlyString.length; i++)
      {
      for (let ii = 0; ii < (arrayOnlyString[i]).length; ii++)
      {
          if((arrayOnlyString[i])[ii] !== " ")
          {
              withSpase.push(((arrayOnlyString[i])[ii]).toUpperCase())
              break
          }
      }
  }
  
  return ((withSpase.sort()).join(''))

}

module.exports = 
{
  createDreamTeam
};
