

 using System;


namespace ContactBook
{
    class telephone
    {
        public string name,email, address;
        public long phone;
       
        static List<telephone> arr = new List<telephone>();


        static void Main(string[] args)
        {
            bool a = true;
            while (a)
            {
                  Console.Clear();
                Console.WriteLine("1 : Enter information");
                Console.WriteLine("2 : Display information");
                Console.WriteLine("3 : Search information");
                Console.WriteLine("4 : Edit information");
                Console.WriteLine("5 : Delete information");
                Console.WriteLine("6 : Exit");
               
                Console.WriteLine("Enter no:");
               int input = Convert.ToInt32(Console.ReadLine());



                


                switch (input)

                {
                    case 1:

                        Create();

                        break;
                    case 2:

                        Display();

                        break;

                    case 3:

                        Edit();

                        break;
                    case 4:

                        Search();

                        break;
                    case 5:

                       Delete();

                        break;
                    case 6:

                        //Environment.Exit(0); 
                        a = false;

                        break;
                    default:
                       
                        Console.WriteLine("enter valid number");
                        Console.ReadLine(); 
                        break;
                }
            }
        }
      
        static void Create()
        {
            Console.Clear();
            telephone t = new telephone();

            Console.WriteLine("enter name:");
            t.name = Console.ReadLine();

            Console.WriteLine("enter address:");
            t.email = Console.ReadLine();

            Console.WriteLine("enter address:");
            t.address = Console.ReadLine();

            Console.WriteLine("enter no:");
            t.phone = Convert.ToInt64(Console.ReadLine());

            arr.Add(t);
            Console.WriteLine("User added successfull[y.");
           
            Console.ReadLine();

        }


        static void Display()
        {
            Console.Clear();

            foreach (telephone i in arr)
            {
                Console.WriteLine("Name     : " + i.name);
                Console.WriteLine("Email     : " + i.email);
                Console.WriteLine("Address  : " + i.address);
                Console.WriteLine("ph.No   : " + i.phone);

                Console.ReadKey();

            }
        }
        
        static void Edit()
        {
             

            Console.Clear();
            Console.WriteLine("Enter the No of the user to edit:");
            long editNo =Convert.ToInt64(Console.ReadLine());

            // Find the corresponding User object in the list
            telephone editUser = arr.Find(user => user.phone == editNo);
            
            if (editUser==null)
            {
                // Prompt the user to edit the user's details
                Console.WriteLine("Editing user: not found");
                Console.WriteLine($"User with  {editNo} not found.");

            }
            else
            {
              
                  

                Console.WriteLine($"Editing user: {editUser.name}");

               Console.WriteLine("Enter the new name :");
               string newName = Console.ReadLine();

               if (!string.IsNullOrWhiteSpace(newName))
               {
                    editUser.name = newName;
               }
                Console.WriteLine("Enter the new  email:");
                string newEmail = Console.ReadLine();
                if (!string.IsNullOrWhiteSpace(newEmail))
                {
                    editUser.email = newEmail;
                }
                Console.WriteLine("Enter the new  address:");
                    string newAddress = Console.ReadLine();
                    if (!string.IsNullOrWhiteSpace(newAddress))
                    {
                        editUser.address = newAddress;
                    }

                    Console.WriteLine("Enter the new phone number :");
                    string newNo = Console.ReadLine();

                    if (!string.IsNullOrWhiteSpace(newNo))
                    {
                  
                        long newNos = Convert.ToInt32(newNo);
                        editUser.phone = newNos;
                    }
                        Console.WriteLine("User edited successfully.");
            }
                    Console.ReadLine();

        }
        

        static void Search()
        {
            Console.Clear();
            Console.WriteLine("Enter the No of the user to search:");
            long edit = Convert.ToInt64(Console.ReadLine());
            telephone SearchUser = arr.Find(user => user.phone == edit);
            if (SearchUser == null)
            {
                // Prompt the user to edit the user's details
                Console.WriteLine("Search user not found");
                Console.ReadLine();


            }
            else
            {

                Console.WriteLine($"Name:{SearchUser.name}");
                Console.WriteLine($"Email:{SearchUser.email}");
                Console.WriteLine($"Address : {SearchUser.address}");
                Console.WriteLine($"Ph.No : {SearchUser.phone}");
                Console.ReadLine();
            }

                
        }
        static void Delete()
        {
            Console.Clear();
            Console.WriteLine("Enter the No of the user to search to delete:");
            long edit = Convert.ToInt64(Console.ReadLine());
            telephone SearchUser = arr.Find(user => user.phone == edit);
            if (SearchUser == null)
            {
               
                    // Prompt the user to edit the user's details
                    Console.WriteLine("Search user not found");
                


            }
            else
            {
               
                  
                Console.WriteLine($"Name:{SearchUser.name}");
                Console.WriteLine($"Email:{SearchUser.email}");
                Console.WriteLine($"Address : {SearchUser.address}");
                Console.WriteLine($"Ph.No : {SearchUser.phone}");
                arr.Remove(SearchUser);
                Console.WriteLine("User deleted successfully.");

            }
                Console.ReadLine();
        }
       
    }

}  
    


