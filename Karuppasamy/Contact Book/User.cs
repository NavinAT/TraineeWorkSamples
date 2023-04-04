internal class User
{
    private string v1;
    private string v2;
    private string v3;

    public User(string v1, string v2, string v3)
    {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    public string? Email { get; internal set; }
    public object Name { get; internal set; }
}