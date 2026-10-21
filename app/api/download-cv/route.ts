import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "CV_Do Tan Luc.pdf")
    
    // Fallback to original filename with spaces if needed
    const resolvedPath = fs.existsSync(filePath)
      ? filePath
      : path.join(process.cwd(), "public", "CV_Do Tan Luc.pdf")

    if (!fs.existsSync(resolvedPath)) {
      return new NextResponse("File not found", { status: 404 })
    }

    const fileBuffer = fs.readFileSync(resolvedPath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV_Do Tan Luc.pdf"',
        "Content-Length": fileBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("Error serving CV file:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
