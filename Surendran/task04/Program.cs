
using System;
using System.Collections.Generic;

namespace contact_book
{
    public class Data
    {
        public string name { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string address { get; set; }
        public override string ToString()
        {
           return "    NAME: " + name + "   PHONE: " + phone + "    EMAIL: " + email + "   ADDRESS: " + address;
        }
    }
    public class create_contact
    {
        public static List<Data> user_details = new List<Data>();
        private static void contact()
        {
            Data data = new Data();
            Console.WriteLine("Enter Name :");
            data.name = Console.ReadLine();
            Console.WriteLine("Enter Phone :");
            data.phone = Console.ReadLine();
            Console.WriteLine("Enter Email :");
            data.email = Console.ReadLine();
            Console.WriteLine("Enter Address :");
            data.address = Console.ReadLine();
            user_details.Add(data);
            Console.Write("\n    NEW CONTACT ADDED: \n    __________________\n");
            Console.WriteLine("    Name: " + data.name + "   Phone: " + data.phone + "   Email: " + data.email + "   Address: " + data.address);
            Console.WriteLine("\n press enter to continue. . .! \n ");
        }
        private static void Read()
        {
            Console.WriteLine("    TOTAL CONTACTS:" + user_details.Count + " \n    ________________");
            for(int i = 0; i < user_details.Count; i++)
             {
                Console.Write("\n    Contact: {0} \n", i + 1);
                Console.WriteLine(user_details[i]+"\n");
             }
            Console.WriteLine("\n press enter to continue. . .! \n ");
        }
        private static void update()
        {
            Console.WriteLine("    TOTAL CONTACTS:" + user_details.Count + " \n    ________________");
            for(int i = 0; i < user_details.Count; i++)
            {
                Console.Write("\n    Contact: {0} \n", i + 1);
                Console.WriteLine(user_details[i] + "\n");
            }
            Console.WriteLine("\n    Enter the contact number to edit: \n    ________________________________");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(user_details[a - 1]);
            Console.WriteLine("\n    Select which is edit:  \n    _____________________\n    1.Name 2.Phone 3.Email 4.Address \n");
            int b = Convert.ToInt32(Console.ReadLine());
            switch(b)
            {
                case 1:
                    Console.WriteLine(user_details[a - 1].name);
                    Console.WriteLine("\n    Enter the New Name: ");
                    user_details[a-1].name = Console.ReadLine();
                    break;
                case 2:
                    Console.WriteLine(user_details[a - 1].phone);
                    Console.WriteLine("\n    Enter the New Phone: ");
                    user_details[a - 1].phone = Console.ReadLine();
                    break;
                case 3:
                    Console.WriteLine(user_details[a - 1].email);
                    Console.WriteLine("\n    Enter the New Email: ");
                    user_details[a - 1].email = Console.ReadLine();
                    break;
                case 4:
                    Console.WriteLine(user_details[a - 1].address);
                    Console.WriteLine("\n    Enter the New Address: ");
                    user_details[a - 1].address = Console.ReadLine();
                    break;
                default:
                    Console.WriteLine("invalide number!! pls enter the crt number  ");
                    break;
            }

            Console.WriteLine("\n    Contact Successfully Updated :) \n ");
            Console.WriteLine(user_details[a - 1]);
            Console.WriteLine("\n Press enter to continue. . .! \n ");
        }
        private static void Delete()
		{
            Console.WriteLine("    TOTAL CONTACTS:"+ user_details.Count + " \n    _______________");
            for(int i = 0; i < user_details.Count; i++)
            {
                Console.Write("    Contact: {0} \n", i + 1);
                Console.WriteLine(user_details[i] + "\n");
            }
            Console.WriteLine("\n    Enter the contact number to Delete: ");
            int a = Convert.ToInt32(Console.ReadLine());
             user_details.RemoveAt(a-1);
            Console.WriteLine("\n    contact Successfully deleted  :) ");
            Console.WriteLine("\n press enter to continue. . .! \n ");
        }

        private static void Search()
        {
            Console.WriteLine("\n    Enter the Name or Phone Number ");
            string a = Console.ReadLine();
            for(int i = 0; i < user_details.Count; i++)
            {
                if(string.Equals(user_details[i].name, a) || string.Equals(user_details[i].phone, a))
                {
                    Console.Write("    user found: "+ user_details[i].name+"\n");
                    Console.Write(user_details[i]);
                 }
		    }
        }
        static void Main(string[] args)
        {
            while(true)
            {
                Console.WriteLine(" CONTACT BOOk\n ____________\n");
                Console.WriteLine(" 1.Create \n 2.Read \n 3.Update \n 4.Delete \n 5.Search \n \n  Enter your choice: \n  __________________");
                int number = Convert.ToInt32(Console.ReadLine());
                create_contact con = new create_contact();
                switch(number)
                {
                    case 1:
                        contact();
                        break;
                    case 2:
                        Read();
                        break;
                    case 3:
                        update();
                       break;
                    case 4:
                        Delete();
                        break;
                    case 5:
                        Search();
                        break;
                    
                    default:
                        Console.WriteLine("invalide number!! pls enter the crt number  ");
                        break;
                }
                Console.ReadLine();
            }
        }
    }
}



/*
 Contact Book

Operations:

Create
Read
Update
Delete
Search

Design

   1. Contact Book Fields
   2. Methods
   3. Flow diagram - Algorithm
 */
