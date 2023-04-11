
using System;
using System.Collections.Generic;

namespace task04
{
    public class Data
    {
        public string Name { get; set; }
        public long Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public override string ToString()
        {
            return "    NAME: " + Name + "   PHONE: " + Phone + "    EMAIL: " + Email + "   ADDRESS: " + Address;
        }
    }
    public class ContactDetails
    {
        public static List<Data> UserDetails = new List<Data>();
        public static void Contact()
        {
            Data data = new Data();
            Console.WriteLine("Enter Name :");
            data.Name = Console.ReadLine();
            Console.WriteLine("Enter Phone :");
            data.Phone =Convert.ToInt64(Console.ReadLine());
            Console.WriteLine("Enter Email :");
            data.Email = Console.ReadLine();
            Console.WriteLine("Enter Address :");
            data.Address = Console.ReadLine();
            UserDetails.Add(data);
            Console.Write("\n    NEW CONTACT ADDED: \n    __________________\n");
            Console.WriteLine("    Name: " + data.Name + "   Phone: " + data.Phone + "   Email: " + data.Email + "   Address: " + data.Address);
            Console.WriteLine("\n press enter to continue. . .! \n ");
        }
        private static void Read()
        {
            Console.WriteLine("    TOTAL CONTACTS:" + UserDetails.ToArray().Length + " \n    ________________");
            for(int i = 0; i < UserDetails.Count; i++)
            {
                Console.Write("\n    Contact: {0} \n", i + 1);
                Console.WriteLine(UserDetails[i] + "\n");
            }
            Console.WriteLine("\n press enter to continue. . .! \n ");
        }
        private static void Update()
        {
            Console.WriteLine("    TOTAL CONTACTS:" + UserDetails.Count + " \n    ________________");
            Console.WriteLine("\n    Enter the phone number to edit: \n    _______________________________");
            long a = Convert.ToInt64(Console.ReadLine());
            for(int i = 0; i < UserDetails.ToArray().Length; i++)
            {
                if(a.Equals(UserDetails[i].Phone))
                {
                    Console.Write("    user found: " + UserDetails[i].Name + "\n");
                    Console.Write(UserDetails[i]);
                    Console.WriteLine("\n    Select which is edit:  \n    _____________________\n    1.Name 2.Phone 3.Email 4.Address \n");
                    string select = Console.ReadLine();
                    bool res;
                    int b;
                    res = int.TryParse(select, out b);
                    if(res == true)
                    {
                        switch(select)
                        {
                            case "1":
                                Console.WriteLine("\n    Old Name: " + UserDetails[i].Name);
                                Console.WriteLine("\n    Enter the New Name: ");
                                UserDetails[i].Name = Console.ReadLine();
                                break;
                            case "2":
                                Console.WriteLine("\n    Old Phone number: " + UserDetails[i].Phone);
                                Console.WriteLine("\n    Enter the New Phone: ");
                                UserDetails[i].Phone = Convert.ToInt64(Console.ReadLine());
                                break;
                            case "3":
                                Console.WriteLine("\n    Old Email: " + UserDetails[i].Email);
                                Console.WriteLine("\n    Enter the New Email: ");
                                UserDetails[i].Email = Console.ReadLine();
                                break;
                            case "4":
                                Console.WriteLine("\n    Old Address: " + UserDetails[i].Address);
                                Console.WriteLine("\n    Enter the New Address: ");
                                UserDetails[i].Address = Console.ReadLine();
                                break;
                            default:
                                Console.WriteLine("Invalid number!! please enter the correct number  ");
                                break;
                        }
                        Console.WriteLine("\n    Contact Successfully Updated :) \n ");
                    }
                    else
                    {
                        Console.WriteLine("\n This is not a number!! please enter the  number ! \n");
                    }
                }
            }
            Console.WriteLine("\n Press enter to continue. . .! \n ");
        }
        private static void Delete()
        {
            Console.WriteLine("\n    Enter the Phone Number (or) Email Id to Delete: \n    _______________________________________________ ");
            string a = Console.ReadLine();
            bool res;
            int b;
            res = int.TryParse(a, out b);
            for(int i = 0; i < UserDetails.ToArray().Length; i++)
			{
               if(res == true)
                {
                    long Long = long.Parse(a);
                    if(Long.Equals(UserDetails[i].Phone))
                    {
                        Console.Write("    user found: " + UserDetails[i].Name + "\n");
                        Console.Write(UserDetails[i]);
                        UserDetails.RemoveAt(i);
                        Console.WriteLine("\n    contact Successfully deleted  :) ");
                    }
                }
                else if(string.Equals(UserDetails[i].Email, a))
                {
                    Console.Write("    user found: " + UserDetails[i].Name + "\n");
                    Console.Write(UserDetails[i]);
                    UserDetails.RemoveAt(i);
                    Console.WriteLine("\n    contact Successfully deleted  :) ");
                }
            }
            Console.WriteLine("\n press enter to continue. . .! \n ");
        }
        private static void Search()
        {
            Console.WriteLine("\n    Enter the Phone Number (or) Email Id to Search :\n    _______________________________________________");
            string a =Console.ReadLine();
            bool res;
            int b;
            res = int.TryParse(a, out b);
            for(int i = 0; i < UserDetails.ToArray().Length; i++)
            {
                if(res == true)
                {
                    long e = long.Parse(a);
                    if(e.Equals(UserDetails[i].Phone))
                    {
                        Console.Write("    user found: " + UserDetails[i].Name + "\n");
                        Console.Write(UserDetails[i]);
                    }
                }
                else if(string.Equals(UserDetails[i].Email,a))
                {
                    Console.Write("    user found: " + UserDetails[i].Name + "\n");
                    Console.Write(UserDetails[i]);
                }
            }
            Console.WriteLine("\n press enter to continue. . .! \n ");
        }
        public static void Main(string[] args)
        {
            while(true)
            {
                Console.WriteLine(" CONTACT BOOk\n ____________\n");
                Console.WriteLine(" 1.Create \n 2.Read \n 3.Update \n 4.Delete \n 5.Search \n 6.Exit \n \n  Enter your choice: \n  __________________");
                string number = Console.ReadLine();
                bool res;
                int a;
                res = int.TryParse(number, out a);
                if(res == true)
                {
                    switch(number)
                    {
                        case "1":
                            Contact();
                            break;
                        case "2":
                            Read();
                            break;
                        case "3":
                            Update();
                            break;
                        case "4":
                            Delete();
                            break;
                        case "5":
                            Search();
                            break;
                        case "6":
                            return;
                        default:
                            Console.WriteLine("Invalid number!! please enter the correct number  ");
                            break;
                    }
                }
                else
                {
                    Console.WriteLine("This is not a number!! please enter the  number ! \n");
                }
                Console.ReadLine();
            }
        }
    }
}

